import { Component, OnInit } from '@angular/core';
import {IDropdownSettings} from 'ng-multiselect-dropdown/multiselect.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfesorServiceService} from '../../../profesors/service/profesor-service.service';
import {MateriaService} from '../../../materies/service/materia.service';
import {StudentService} from '../../../students/service/student.service';
import {GroupService} from '../../service/group.service';
import {Group} from '../../model/group';
import {Student} from '../../../students/model/student';
import {AuthPersonService} from '../../../persons/service/auth-person.service';
import {DateJavaModel} from '../../../dates/model/date-java-model';

@Component({
  selector: 'app-group-students',
  templateUrl: './group-students.component.html',
  styleUrls: ['./group-students.component.css']
})
export class GroupStudentsComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {};
  id: number;
  group: Group = new Group();
  students: Student[] = [];
  constructor(private route: ActivatedRoute,
              private router: Router,
              private studentService: StudentService,
              private groupService: GroupService,
              private authService: AuthPersonService) { }

  ngOnInit(): void {
    this.students = [];
    this.group = new Group();
    this.id = this.route.snapshot.params.id;
    this.groupService.getById(this.id , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result => {
      this.group = new Group();
      this.group =  JSON.parse(result) as Group;
    });
    this.studentService.findAllWithoutGroup(this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.students = [];
      this.students = JSON.parse(data) as Student[];
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'fullName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.groupService.update(this.group , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.router.navigate(['']);
    });
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
