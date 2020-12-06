import { Component, OnInit } from '@angular/core';
import {Materia} from '../../model/materia';
import {ActivatedRoute, Router} from '@angular/router';
import {MateriaService} from '../../service/materia.service';
import {AuthPersonService} from '../../../persons/service/auth-person.service';

@Component({
  selector: 'app-add-materia',
  templateUrl: './add-materia.component.html',
  styleUrls: ['./add-materia.component.css']
})
export class AddMateriaComponent implements OnInit {
materia: Materia = new Materia();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private materiaService: MateriaService,
              private authService: AuthPersonService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  goToMateriaList(){
    this.router.navigate(['materies']);
  }
  // tslint:disable-next-line:typedef
  public onSubmit(){
    this.materiaService.save(this.materia , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result => this.goToMateriaList());
  }

}
