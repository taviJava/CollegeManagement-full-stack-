import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfesorServiceService} from '../../service/profesor-service.service';
import {Profesor} from '../../model/profesor';
import {AuthPersonService} from '../../../persons/service/auth-person.service';
import {Student} from '../../../students/model/student';

@Component({
  selector: 'app-profesor-edit',
  templateUrl: './profesor-edit.component.html',
  styleUrls: ['./profesor-edit.component.css']
})
export class ProfesorEditComponent implements OnInit {
  profesor: Profesor ;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private profesorService: ProfesorServiceService,
              private authService: AuthPersonService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.profesorService.getById(this.id, this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.profesor =  JSON.parse(data) as Profesor;
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    // tslint:disable-next-line:max-line-length
    this.profesorService.update(this.profesor , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result => this.gotoProfesorsList());
  }

  // tslint:disable-next-line:typedef
  gotoProfesorsList() {
    this.router.navigate(['']);
  }


}
