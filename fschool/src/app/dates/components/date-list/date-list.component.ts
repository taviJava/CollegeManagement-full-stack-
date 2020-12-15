import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DateService} from '../../service/date.service';
import {DateJavaModel} from '../../model/date-java-model';
import {AuthPersonService} from '../../../persons/service/auth-person.service';
import {Classroom} from '../../../classrooms/model/classroom';
import {Person} from '../../../persons/model/person';

@Component({
  selector: 'app-date-list',
  templateUrl: './date-list.component.html',
  styleUrls: ['./date-list.component.css']
})
export class DateListComponent implements OnInit {
datesJava: DateJavaModel[];
closeResult = '';
currentUser: Person = new Person();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private dateService: DateService,
              private authService: AuthPersonService) { }

  ngOnInit(): void {
  this.currentUser = new Person();
  this.currentUser = this.authService.returnUser();
  this.getDates();
  }
// tslint:disable-next-line:typedef
  getDates(){
    this.dateService.findAll(this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
        this.datesJava = JSON.parse(data) as DateJavaModel[];
    }
      );
  }
  // tslint:disable-next-line:typedef
  addDate(){
    this.router.navigate(['addDate']);
  }
  // tslint:disable-next-line:typedef
  editDate(id: number) {
    this.router.navigate(['editDate/' + id]);
  }
  // tslint:disable-next-line:typedef
  delete(id: number){
    this.dateService.delete(id , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result => this.getDates());
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  // tslint:disable-next-line:typedef
  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.delete(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  hasAdmPrivileges(): boolean{
    if (this.currentUser.role === 'Admin'){
      return true;
    }
      }
  hasProfPrivileges(): boolean{
    if (this.currentUser.role === 'Professor'){
      return true;
    }
  }
}
