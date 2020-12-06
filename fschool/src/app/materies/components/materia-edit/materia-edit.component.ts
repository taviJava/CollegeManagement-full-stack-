import { Component, OnInit } from '@angular/core';
import {Materia} from '../../model/materia';
import {ActivatedRoute, Router} from '@angular/router';
import {MateriaService} from '../../service/materia.service';
import {AuthPersonService} from '../../../persons/service/auth-person.service';
import {Student} from '../../../students/model/student';

@Component({
  selector: 'app-materia-edit',
  templateUrl: './materia-edit.component.html',
  styleUrls: ['./materia-edit.component.css']
})
export class MateriaEditComponent implements OnInit {
materia: Materia;
id: number;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private materiaService: MateriaService,
              private authService: AuthPersonService
  ) { }

  ngOnInit(): void {
    this.materia = new Materia();
    this.id = this.route.snapshot.params.id;
    this.materiaService.getById(this.id , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.materia =  JSON.parse(data) as Materia;
    });

  }
  // tslint:disable-next-line:typedef
  goToMateriaList(){
    this.router.navigate(['materies']);
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.materiaService.update(this.materia , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result => this.goToMateriaList());
  }


}
