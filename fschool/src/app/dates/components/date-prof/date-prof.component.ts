import { Component, OnInit } from '@angular/core';
import {Person} from '../../../persons/model/person';
import {AuthPersonService} from '../../../persons/service/auth-person.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DateService} from '../../service/date.service';
import {DateJavaModel} from '../../model/date-java-model';

@Component({
  selector: 'app-date-prof',
  templateUrl: './date-prof.component.html',
  styleUrls: ['./date-prof.component.css']
})
export class DateProfComponent implements OnInit {
  isLoggedIn = false;
  currentUser: Person = new Person();
  datesJava: DateJavaModel[];
  id: number;

  constructor(private authService: AuthPersonService,
              private route: ActivatedRoute,
              private router: Router,
              private dateService: DateService) {
    this.currentUser = new Person();
  }

  ngOnInit(): void {
    this.currentUser = this.authService.person;
    this.id = this.currentUser.id;
    this.dateService.findAllByProf(this.authService.TOKEN_SESSION_ATTRIBUTE_NAME, this.id).subscribe(data => {
        this.datesJava = JSON.parse(data) as DateJavaModel[];
      }
    );
  }

  // tslint:disable-next-line:typedef
  goToEvidence(id: number) {
    this.router.navigate(['evidence/' + id]);
  }

  hasProfPrivileges(): boolean {
    if (this.currentUser.role === 'Professor') {
      return true;
    }

  }
}
