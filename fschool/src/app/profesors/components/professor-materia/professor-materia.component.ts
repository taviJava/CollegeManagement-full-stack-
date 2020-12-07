import { Component, OnInit } from '@angular/core';
import {Profesor} from '../../model/profesor';
import {Materia} from '../../../materies/model/materia';
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfesorServiceService} from '../../service/profesor-service.service';
import {MateriaService} from '../../../materies/service/materia.service';
import {AuthPersonService} from '../../../persons/service/auth-person.service';

@Component({
  selector: 'app-professor-materia',
  templateUrl: './professor-materia.component.html',
  styleUrls: ['./professor-materia.component.css']
})
export class ProfessorMateriaComponent implements OnInit {
  id: number;
  profesor: Profesor = new Profesor();
  materiass: Materia[] = [];
  dropdownSettings: IDropdownSettings = {};
  public profesors: Profesor[] = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private profesorService: ProfesorServiceService,
              private materiaService: MateriaService,
              private authService: AuthPersonService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.profesorService.getById(this.id, this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.profesor = JSON.parse(data) as Profesor;
    });
    this.materiass = [];
    // tslint:disable-next-line:max-line-length
    this.materiaService.findAll(this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => this.materiass = JSON.parse(data) as Materia[]);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
  this.profesorService.update(this.profesor, this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => this.gotoProfesorsList());
  }
  // tslint:disable-next-line:typedef
  gotoProfesorsList() {
    this.router.navigate(['']);
  }
  // tslint:disable-next-line:typedef
  onItemSelect(item: any) {
    console.log(item);
  }
  // tslint:disable-next-line:typedef
  onSelectAll(items: any) {
    console.log(items);
  }

}



