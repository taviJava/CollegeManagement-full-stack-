import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Group} from '../../model/group';
import {GroupService} from '../../service/group.service';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})
export class GroupAddComponent implements OnInit {
  group: Group = new Group();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private groupService: GroupService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  goToGroupList(){
    this.router.navigate(['groups']);
  }
  // tslint:disable-next-line:typedef
  public onSubmit(){
    this.groupService.save(this.group).subscribe(result => this.goToGroupList());
  }

}
