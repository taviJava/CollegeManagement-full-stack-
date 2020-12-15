import { Component, OnInit } from '@angular/core';
import {Evidence} from '../../model/evidence';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DateService} from '../../service/date.service';
import {AuthPersonService} from '../../../persons/service/auth-person.service';

@Component({
  selector: 'app-date-evidence',
  templateUrl: './date-evidence.component.html',
  styleUrls: ['./date-evidence.component.css']
})
export class DateEvidenceComponent implements OnInit {
  evidences: Evidence[] = [];
  id: number;
  prezence = ['unspecified', 'prezent' , 'absent' ];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private dateService: DateService,
              private authService: AuthPersonService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.evidences = [];
    this.dateService.findEvidencesByDate(this.authService.TOKEN_SESSION_ATTRIBUTE_NAME, this.id).subscribe(data => {
      this.evidences = [];
      this.evidences = JSON.parse(data) as Evidence[];
    });
  }

}
