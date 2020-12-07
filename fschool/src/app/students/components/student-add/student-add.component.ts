import { Component, OnInit } from '@angular/core';
import {Student} from '../../model/student';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../service/student.service';
import {AuthPersonService} from '../../../persons/service/auth-person.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  student: Student = new Student();
  password = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService,
              private authService: AuthPersonService) { }

  ngOnInit(): void {
    this.student = new Student();
  }
// tslint:disable-next-line:typedef
onSubmit(){
    this.studentService.save(this.student , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result =>{
      this.goToStudents();
    });
}
// tslint:disable-next-line:typedef
goToStudents(){
  this.router.navigate(['students']);
}
matchPassword(): boolean{
    if (this.student.password === this.password){
      return true;
    }
}
}
