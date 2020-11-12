import { Component, OnInit } from '@angular/core';
import {Materia} from '../../model/materia';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MateriaService} from '../../service/materia.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-materia',
  templateUrl: './add-materia.component.html',
  styleUrls: ['./add-materia.component.css']
})
export class AddMateriaComponent implements OnInit {
materia: Materia = new Materia();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private materiaService: MateriaService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  goToMateriaList(){
    this.router.navigate(['materies']);
  }
  // tslint:disable-next-line:typedef
  public onSubmit(){
    this.materiaService.save(this.materia).subscribe(result => this.goToMateriaList());
  }

}
