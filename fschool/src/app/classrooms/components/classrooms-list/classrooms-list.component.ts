import { Component, OnInit } from '@angular/core';
import {Classroom} from '../../model/classroom';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ClassroomService} from '../../service/classroom.service';
import {AuthPersonService} from '../../../persons/service/auth-person.service';

@Component({
  selector: 'app-classrooms-list',
  templateUrl: './classrooms-list.component.html',
  styleUrls: ['./classrooms-list.component.css']
})
export class ClassroomsListComponent implements OnInit {
classrooms: Classroom[];
  closeResult = '';
  constructor(  private route: ActivatedRoute,
                private router: Router,
                private modalService: NgbModal,
                private classroomservice: ClassroomService,
                private authService: AuthPersonService) { }

  ngOnInit(): void {
    this.getClassrooms();
  }
  // tslint:disable-next-line:typedef
  getClassrooms() {
    this.classroomservice.findAll(this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.classrooms = JSON.parse(data) as Classroom[];
      // this.profesors = JSON.parse(data) as Profesor[];
    });


  }
  // tslint:disable-next-line:typedef
  addClassroom() {
    this.router.navigate(['addClassroom']);
  }
  // tslint:disable-next-line:typedef
  editClassroom(id: number){
    this.router.navigate(['editClassroom/' + id]);
  }
  // tslint:disable-next-line:typedef
  deleteClassroom(id: number){
    this.classroomservice.delete(id , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result => this.getClassrooms());
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
      this.deleteClassroom(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



}
