import { Component, OnInit } from '@angular/core';
import {Classroom} from '../../model/classroom';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassroomService} from '../../service/classroom.service';
import {AuthPersonService} from '../../../persons/service/auth-person.service';

@Component({
  selector: 'app-classroom-edit',
  templateUrl: './classroom-edit.component.html',
  styleUrls: ['./classroom-edit.component.css']
})
export class ClassroomEditComponent implements OnInit {
  classroom: Classroom;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private classroomservice: ClassroomService,
              private authService: AuthPersonService
  ) {
  }

  ngOnInit(): void {
    this.classroom = new Classroom();
    this.id = this.route.snapshot.params.id;
    this.classroomservice.getById(this.id , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.classroom = JSON.parse(data) as Classroom;
    });
  }
  // tslint:disable-next-line:typedef
  gotoClassrooms() {
    this.router.navigate(['classrooms']);
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    this.classroomservice.update(this.classroom , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result => this.gotoClassrooms());
  }
}
