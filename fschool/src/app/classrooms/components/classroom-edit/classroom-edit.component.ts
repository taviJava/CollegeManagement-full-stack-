import { Component, OnInit } from '@angular/core';
import {Classroom} from '../../model/classroom';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassroomService} from '../../service/classroom.service';

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
              private classroomservice: ClassroomService
  ) {
  }

  ngOnInit(): void {
    this.classroom = new Classroom();
    this.id = this.route.snapshot.params.id;
    this.classroomservice.getById(this.id).subscribe(data => {
      this.classroom = data;
    });
  }
  // tslint:disable-next-line:typedef
  gotoClassrooms() {
    this.router.navigate(['classrooms']);
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    this.classroomservice.update(this.classroom).subscribe(result => this.gotoClassrooms());
  }
}
