import { Component, OnInit } from '@angular/core';
import {AuthPersonService} from '../../../persons/service/auth-person.service';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../../students/service/student.service';
import {ProfesorServiceService} from '../../../profesors/service/profesor-service.service';
import {Person} from '../../../persons/model/person';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn = false;
  currentUser: Person = new Person();
  constructor(private authService: AuthPersonService,
              private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService,
              private profesorService: ProfesorServiceService) { this.currentUser = new Person();
                                                                 this.currentUser.email = ''; }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(data => {
      this.isLoggedIn = data;
      this.currentUser = new Person();
      this.currentUser = this.authService.person;
      console.log(this.currentUser);
    });
  }
  // tslint:disable-next-line:typedef
  logOut() {
    this.authService.logout();
    this.router.navigate(['']);
  }
  login(): boolean{
    return this.authService.isLoggedIn.getValue();
  }
  isLogout(): boolean{
    return this.login() !== true;
  }
}
