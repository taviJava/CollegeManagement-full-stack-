import { Component, OnInit } from '@angular/core';
import {Classroom} from '../../model/classroom';
import {ActivatedRoute, Router} from '@angular/router';
import {ClassroomService} from '../../service/classroom.service';

@Component({
  selector: 'app-classroom-add',
  templateUrl: './classroom-add.component.html',
  styleUrls: ['./classroom-add.component.css']
})
export class ClassroomAddComponent implements OnInit {
classroom: Classroom = new Classroom();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private classroomservice: ClassroomService
  ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  gotoClassrooms() {
    this.router.navigate(['classrooms']);
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.classroomservice.save(this.classroom).subscribe(result => this.gotoClassrooms());
  }

}
