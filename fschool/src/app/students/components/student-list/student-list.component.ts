import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../service/student.service';
import {Student} from '../../model/student';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 students: Student[] = [];
  closeResult = '';
   constructor(private route: ActivatedRoute,
               private router: Router,
               private studentService: StudentService,
               private modalService: NgbModal) { }

  ngOnInit(): void {
     this.students = [];
     this.studentService.findAll().subscribe(result => {
       this.students = [];
       this.students = result;
     });
  }
// tslint:disable-next-line:typedef
goToAddStudents(){
     this.router.navigate(['studentadd']);
}
  // // tslint:disable-next-line:typedef
  // editProfesor(id: number) {
  //   this.router.navigate(['editprofesor/' + id]);
  // }
  // tslint:disable-next-line:typedef
  deleteStudent(id: number) {
    this.studentService.delete(id).subscribe(data => {
      this.ngOnInit();
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
      this.deleteStudent(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
