import { Component, OnInit } from '@angular/core';
import {Materia} from '../../../materies/model/materia';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MateriaService} from '../../../materies/service/materia.service';
import {Group} from '../../model/group';
import {GroupService} from '../../service/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  groups: Group[];
  closeResult = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private groupService: GroupService
  ) { }

  ngOnInit(): void {
    this.getGroups();
  }
  // tslint:disable-next-line:typedef
  getGroups(){
    this.groupService.findAll().subscribe(data => this.groups = data );
  }
  // tslint:disable-next-line:typedef
  addGroup(){
    this.router.navigate(['addgroup']);
  }
  // tslint:disable-next-line:typedef
  deleteGroup(id: number){
    this.groupService.delete(id).subscribe(result => this.getGroups());
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
      this.deleteGroup(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
}
