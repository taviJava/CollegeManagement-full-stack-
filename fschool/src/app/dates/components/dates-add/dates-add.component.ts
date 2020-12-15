import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DateService} from '../../service/date.service';
import {DateJavaModel} from '../../model/date-java-model';
import {ModalDismissReasons, NgbDate, NgbModal, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {Profesor} from '../../../profesors/model/profesor';
import {Classroom} from '../../../classrooms/model/classroom';
import {Group} from '../../../groups/model/group';
import {ProfesorServiceService} from '../../../profesors/service/profesor-service.service';
import {ClassroomService} from '../../../classrooms/service/classroom.service';
import {GroupService} from '../../../groups/service/group.service';
import {AuthPersonService} from '../../../persons/service/auth-person.service';
import {Student} from '../../../students/model/student';
import {Person} from '../../../persons/model/person';
import {Materia} from '../../../materies/model/materia';


@Component({
  selector: 'app-dates-add',
  templateUrl: './dates-add.component.html',
  styleUrls: ['./dates-add.component.css']
})
export class DatesAddComponent implements OnInit {
  closeResult = '';
  time2: NgbTimeStruct;
  time1: NgbTimeStruct;
  date1: NgbDate;
dateJava: DateJavaModel = new DateJavaModel();
  message: string;
  dropdownSettingsProf: IDropdownSettings = {};
  professors: Profesor[] = [];
  selectedProf: Profesor[] = [];
  dropdownSettingsClass: IDropdownSettings = {};
  classes: Classroom[] = [];
  selectedClasses: Classroom[] = [];
  dropdownSettingsGroup: IDropdownSettings = {};
  groups: Group[] = [];
  selectedGroups: Group[] = [];
  dropdownSettingsMateria: IDropdownSettings = {};
  selectedMateria: Materia[] = [];
  materias: Materia[] = [];
  prof: Profesor = new Profesor();
  constructor(private route: ActivatedRoute,
              private router: Router,
              private dateservice: DateService,
              private modalService: NgbModal,
              private profService: ProfesorServiceService,
              private classService: ClassroomService,
              private groupService: GroupService,
              private authService: AuthPersonService
  ) {  }

  ngOnInit(): void {
    this.prof = new Profesor();
    this.materias = [];
    this.professors = [];
    this.selectedProf = [];
    this.groups = [];
    this.selectedGroups = [];
    this.classes = [];
    this.selectedClasses = [];
    this.selectedMateria = [];
    this.dropdownSettingsProf = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.dropdownSettingsClass = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.dropdownSettingsMateria = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.dropdownSettingsGroup = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.profService.findAll(this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.professors = [];
      this.professors = JSON.parse(data) as Profesor[];
    });
    this.classService.findAll(this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.classes = [];
      this.classes = JSON.parse(data) as Classroom[];
    });
    this.groupService.findAll(this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
      this.groups = [];
      this.groups = JSON.parse(data) as Group[];
    });
  }
  // tslint:disable-next-line:typedef
  public onSubmit(content){
    this.dateJava.date = this.date1.year + '-' + this.date1.month + '-' + (this.date1.day + 1);
    this.dateJava.startTime = this.time1.hour + ':' + this.time1.minute + ':' + this.time1.second;
    this.dateJava.endTime = this.time2.hour + ':' + this.time2.minute + ':' + this.time2.second;
    this.dateJava.groupModel = this.selectedGroups[0];
    this.dateJava.classroomModel = this.selectedClasses[0];
    this.dateJava.profesorModel = this.selectedProf[0];
    this.dateJava.materia = this.selectedMateria[0];
    // tslint:disable-next-line:max-line-length
    this.dateservice.save(this.dateJava, this.dateJava.profesorModel.id, this.dateJava.classroomModel.id, this.dateJava.groupModel.id , this.dateJava.materia.id , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(result => {
      const data = JSON.parse(result);
      this.message = data.message;
      this.open(content);
    });
  }

  // tslint:disable-next-line:typedef
  goTodateList(content){
    this.router.navigate(['dates']);
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
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  // tslint:disable-next-line:typedef
  onItemSelect(item: any) {
    console.log(item);
  }
  // tslint:disable-next-line:typedef
 onProfSelect(prof: any){
   console.log(prof);
   this.profService.getById(prof.id , this.authService.TOKEN_SESSION_ATTRIBUTE_NAME).subscribe(data => {
     this.prof = new Profesor();
     this.prof = JSON.parse(data) as Profesor;
     this.materias = this.prof.materiaModelList;
     console.log(this.materias);
   });
 }
  // tslint:disable-next-line:typedef
  onSelectAll(items: any) {
    console.log(items);
  }
}
