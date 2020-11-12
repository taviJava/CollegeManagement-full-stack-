import { Component, OnInit } from '@angular/core';
import {Materia} from '../../model/materia';
import {ActivatedRoute, Router} from '@angular/router';
import {MateriaService} from '../../service/materia.service';

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
              private materiaService: MateriaService
  ) { }

  ngOnInit(): void {
    this.materia = new Materia();
    this.id = this.route.snapshot.params.id;
    this.materiaService.getById(this.id).subscribe(data => {
      this.materia = data;
    });

  }
  // tslint:disable-next-line:typedef
  goToMateriaList(){
    this.router.navigate(['materies']);
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.materiaService.update(this.materia).subscribe(result => this.goToMateriaList());
  }


}
