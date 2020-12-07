import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Group} from '../../model/group';
import {GroupService} from '../../service/group.service';
import {AuthPersonService} from '../../../persons/service/auth-person.service';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {
  group: Group = new Group();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private groupService: GroupService,
              private authService: AuthPersonService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  goToGroupList(){
    this.router.navigate(['groups']);
  }
  // tslint:disable-next-line:typedef
  public onSubmit(){
    this.groupService.save(this.group , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result => this.goToGroupList());
  }

}
