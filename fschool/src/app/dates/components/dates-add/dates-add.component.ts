import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DateService} from '../../service/date.service';
import {DateJavaModel} from '../../model/date-java-model';
import {ModalDismissReasons, NgbDate, NgbModal, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';


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
  constructor(private route: ActivatedRoute,
              private router: Router,
              private dateservice: DateService,
              private modalService: NgbModal
  ) {  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  public onSubmit(content){
    this.dateJava.date = this.date1.year + '-' + this.date1.month + '-' + (this.date1.day + 1);
    this.dateJava.startTime = this.time1.hour + ':' + this.time1.minute + ':' + this.time1.second;
    this.dateJava.endTime = this.time2.hour + ':' + this.time2.minute + ':' + this.time2.second;
    // tslint:disable-next-line:max-line-length
    this.dateservice.save(this.dateJava, this.dateJava.profesorModel.id, this.dateJava.classroomModel.id, this.dateJava.groupModel.id).subscribe(result =>{
      this.message = result.message;
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
}
