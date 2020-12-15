import { Component, OnInit } from '@angular/core';
import {Profesor} from '../../model/profesor';
import {ProfesorServiceService} from '../../service/profesor-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthPersonService} from '../../../persons/service/auth-person.service';
import {Person} from '../../../persons/model/person';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit {
  profesors: Profesor [];
  closeResult = '';
  currentUser: Person = new Person();
  constructor(private profesorService: ProfesorServiceService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private authService: AuthPersonService) { }

  ngOnInit(): void {
    this.getProfesors();
    this.currentUser = new Person();
    this.currentUser = this.authService.returnUser();
  }
  // tslint:disable-next-line:typedef
  getProfesors() {
    this.profesorService.findAll(this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.profesors = JSON.parse(data) as Profesor[];
    });
  }
  // tslint:disable-next-line:typedef
  addUser() {
    this.router.navigate(['addprofesor']);
  }
  // tslint:disable-next-line:typedef
  editProfesor(id: number) {
    this.router.navigate(['editprofesor/' + id]);
  }
  // tslint:disable-next-line:typedef
  deleteProfesor(id: number) {
    this.profesorService.delete(id , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.getProfesors();
    });
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
      this.deleteProfesor(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // tslint:disable-next-line:typedef
  addProfesorMateria(id: number) {
    this.router.navigate(['/profmateria/' + id]);
  }

  hasAdmPrivileges(): boolean {
    if (this.currentUser.role === 'Admin') {
      return true;
    }
  }
}
