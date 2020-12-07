import { Component, OnInit } from '@angular/core';
import {Profesor} from '../../model/profesor';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfesorServiceService} from '../../service/profesor-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthPersonService} from '../../../persons/service/auth-person.service';

@Component({
  selector: 'app-profesor-add',
  templateUrl: './profesor-add.component.html',
  styleUrls: ['./profesor-add.component.css']
})
export class ProfesorAddComponent implements OnInit {
  profesor: Profesor;
  confirmPassword = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private profesorService: ProfesorServiceService,
              private authService: AuthPersonService
              ) {
    this.profesor = new Profesor();
  }

  ngOnInit(): void {
  this.profesor = new Profesor();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.profesorService.save(this.profesor, this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result => this.gotoProfesorsList());
  }

  // tslint:disable-next-line:typedef
  gotoProfesorsList() {
    console.log('product added');
    this.router.navigate(['/professors']);
  }
  matchPassword(): boolean{
    if (this.confirmPassword === this.profesor.password){
      return true;
    }
  }
}
