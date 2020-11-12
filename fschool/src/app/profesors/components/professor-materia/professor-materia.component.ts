import { Component, OnInit } from '@angular/core';
import {Profesor} from '../../model/profesor';
import {Materia} from '../../../materies/model/materia';
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfesorServiceService} from '../../service/profesor-service.service';
import {MateriaService} from '../../../materies/service/materia.service';
import {Observable} from 'rxjs';

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
  myGroup: FormGroup;
  profesorDeProba: Profesor = new Profesor();
  public profesors: Profesor[] = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private profesorService: ProfesorServiceService,
              private materiaService: MateriaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.profesorService.getById(this.id).subscribe(data => {
      this.profesor = data;
    });
    this.materiass = [];
    this.materiaService.findAll().subscribe(data => this.materiass = data);
    console.log(this.materiass);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.myGroup = new FormGroup({
      name: new FormControl(),
      phone: new FormControl(),
      materias: new FormControl()
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
  this.profesorService.update(this.profesor).subscribe(data => this.gotoProfesorsList());
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



