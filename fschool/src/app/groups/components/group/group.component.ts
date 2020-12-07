import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../../../students/service/student.service';
import {GroupService} from '../../service/group.service';
import {AuthPersonService} from '../../../persons/service/auth-person.service';
import {Materia} from '../../../materies/model/materia';
import {Group} from '../../model/group';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  group: Group = new Group();
  id: number;
  closeResult = '';
  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService,
              private groupService: GroupService,
              private authService: AuthPersonService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.group = new Group();
    this.groupService.getById(this.id, this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.group = new Group();
      this.group = JSON.parse(data) as Group;
    });
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
      this.delete(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // tslint:disable-next-line:typedef
  delete(id: number){
    this.groupService.deleteStud(this.group, id , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME ).subscribe(result =>{
      this.ngOnInit();
    });
  }
}
