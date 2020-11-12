import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfesorServiceService} from '../../service/profesor-service.service';
import {Profesor} from '../../model/profesor';

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
              private profesorService: ProfesorServiceService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.profesorService.getById(this.id).subscribe(data => {
      this.profesor = data;
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.profesorService.update(this.profesor).subscribe(result => this.gotoProfesorsList());
  }

  // tslint:disable-next-line:typedef
  gotoProfesorsList() {
    this.router.navigate(['']);
  }


}
