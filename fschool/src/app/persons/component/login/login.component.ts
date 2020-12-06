import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthPersonService} from '../../service/auth-person.service';
import {Person} from '../../model/person';
import {PersonService} from '../../service/person.service';
import {Student} from '../../../students/model/student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  person: Person = new Person();
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthPersonService,
    private personService: PersonService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.person = new Person();
  }

  // tslint:disable-next-line:typedef
  handleLogin() {
    this.authenticationService.authenticationService(this.person).subscribe(result => {
      this.authenticationService.TOKEN_SESSION_ATTRIBUTE_NAME = result.token;
      this.authenticationService.registerSuccessfulLogin(this.person.email, this.person.password);
      this.personService.getByEmail(this.person.email, result.token).subscribe( data => {
        this.authenticationService.person = JSON.parse(data) as Person;
      });
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['professors']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
  }
  // tslint:disable-next-line:typedef
  goToRegister(){
    this.router.navigate(['addPerson']);
  }

}
