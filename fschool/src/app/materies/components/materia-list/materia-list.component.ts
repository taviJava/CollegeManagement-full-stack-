import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MateriaService} from '../../service/materia.service';
import {Materia} from '../../model/materia';
import {AuthPersonService} from '../../../persons/service/auth-person.service';
import {Student} from '../../../students/model/student';
import {Person} from '../../../persons/model/person';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.css']
})
export class MateriaListComponent implements OnInit {
materies: Materia[];
  closeResult = '';
  currentUser: Person = new Person();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private materiaService: MateriaService,
              private authService: AuthPersonService
  ) { }

  ngOnInit(): void {
    this.currentUser = new Person();
    this.currentUser = this.authService.returnUser();
    this.getMateries();
  }
  // tslint:disable-next-line:typedef
  getMateries(){
    // tslint:disable-next-line:max-line-length
    this.materiaService.findAll(this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => this.materies =  JSON.parse(data) as Materia[] );
  }
  // tslint:disable-next-line:typedef
  addMateria(){
    this.router.navigate(['addmateria']);
  }
  // tslint:disable-next-line:typedef
  editMateria(id: number) {
    this.router.navigate(['editmateria/' + id]);
  }
  // tslint:disable-next-line:typedef
  deleteMateria(id: number){
    this.materiaService.delete(id , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result => this.getMateries());
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
      this.deleteMateria(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  hasAdmPrivileges(): boolean{
    if (this.currentUser.role === 'Admin'){
      return true;
    }
  }

}
