import { Component, OnInit } from '@angular/core';
import {Profesor} from '../../model/profesor';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfesorServiceService} from '../../service/profesor-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profesor-add',
  templateUrl: './profesor-add.component.html',
  styleUrls: ['./profesor-add.component.css']
})
export class ProfesorAddComponent implements OnInit {
  profesor: Profesor;
  myGroup: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private profesorService: ProfesorServiceService,
              ) {
    this.profesor = new Profesor();
  }

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      materias: new FormControl()
    });

  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.profesor.name = this.myGroup.get('name').value;
    this.profesor.phoneNumber = this.myGroup.get('phone').value;
    this.profesorService.save(this.profesor).subscribe(result => this.gotoProfesorsList());
  }

  // tslint:disable-next-line:typedef
  gotoProfesorsList() {
    console.log('product added');
    this.router.navigate(['/professors']);
  }
}
