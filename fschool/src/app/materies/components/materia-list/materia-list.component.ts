import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MateriaService} from '../../service/materia.service';
import {Materia} from '../../model/materia';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.css']
})
export class MateriaListComponent implements OnInit {
materies: Materia[];
  closeResult = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private materiaService: MateriaService
  ) { }

  ngOnInit(): void {
    this.getMateries();
  }
  // tslint:disable-next-line:typedef
  getMateries(){
    this.materiaService.findAll().subscribe(data => this.materies = data );
  }
  // tslint:disable-next-line:typedef
  addMateria(){
    this.router.navigate(['addmateria']);
  }
  // tslint:disable-next-line:typedef
  editMateria(id: number) {
    this.router.navigate(['editmateria/' + id]);
  }
  // tslint:disable-next-line:typedef
  deleteMateria(id: number){
    this.materiaService.delete(id).subscribe(result => this.getMateries());
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  // tslint:disable-next-line:typedef
  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.deleteMateria(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


}
