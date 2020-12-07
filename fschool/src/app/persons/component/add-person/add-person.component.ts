import { Component, OnInit } from '@angular/core';
import {Profesor} from '../../../profesors/model/profesor';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfesorServiceService} from '../../../profesors/service/profesor-service.service';
import {Person} from '../../model/person';
import {PersonService} from '../../service/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  person: Person;
  confirmPassword = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private personService: PersonService,
  ) {
    this.person = new Person();
  }

  ngOnInit(): void {
    this.person = new Person();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.person.role = 'Admin';
    console.log(this.person);
    this.personService.save(this.person).subscribe(result => this.gotoProfesorsList());
  }

  // tslint:disable-next-line:typedef
  gotoProfesorsList() {
    this.router.navigate(['']);
  }
  matchPassword(): boolean{
    if (this.confirmPassword === this.person.password){
      return true;
    }
  }
}
