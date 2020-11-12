import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DateService} from '../../service/date.service';
import {DateJavaModel} from '../../model/date-java-model';

@Component({
  selector: 'app-date-list',
  templateUrl: './date-list.component.html',
  styleUrls: ['./date-list.component.css']
})
export class DateListComponent implements OnInit {
datesJava: DateJavaModel[];
closeResult = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private dateService: DateService) { }

  ngOnInit(): void {
  this.getDates();
  }
// tslint:disable-next-line:typedef
  getDates(){
    this.dateService.findAll().subscribe(data => this.datesJava = data);
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
    this.dateService.delete(id).subscribe(result => this.getDates());
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
}
