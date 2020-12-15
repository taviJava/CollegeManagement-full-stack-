import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesorListComponent } from './profesors/components/profesor-list/profesor-list.component';
import {ProfesorAddComponent} from './profesors/components/profesor-add/profesor-add.component';
import {ProfesorEditComponent} from './profesors/components/profesor-edit/profesor-edit.component';
import {ClassroomsListComponent} from './classrooms/components/classrooms-list/classrooms-list.component';
import {ClassroomAddComponent} from './classrooms/components/classroom-add/classroom-add.component';
import {ClassroomEditComponent} from './classrooms/components/classroom-edit/classroom-edit.component';
import {MateriaListComponent} from './materies/components/materia-list/materia-list.component';
import {AddMateriaComponent} from './materies/components/add-materia/add-materia.component';
import {MateriaEditComponent} from './materies/components/materia-edit/materia-edit.component';
import {DateListComponent} from './dates/components/date-list/date-list.component';
import {DatesAddComponent} from './dates/components/dates-add/dates-add.component';
import {TestComponent} from './test/test/test.component';
import {ProfessorMateriaComponent} from './profesors/components/professor-materia/professor-materia.component';
import {StudentListComponent} from './students/components/student-list/student-list.component';
import {StudentAddComponent} from './students/components/student-add/student-add.component';
import {GroupListComponent} from './groups/components/group-list/group-list.component';
import {GroupAddComponent} from './groups/components/group-add/group-add.component';
import {GroupStudentsComponent} from './groups/components/group-students/group-students.component';
import {AddPersonComponent} from './persons/component/add-person/add-person.component';
import {LoginComponent} from './persons/component/login/login.component';
import {GroupComponent} from './groups/components/group/group.component';
import {AdminGuardService} from './persons/service/admin-guard.service';
import {DateProfComponent} from './dates/components/date-prof/date-prof.component';
import {DateEvidenceComponent} from './dates/components/date-evidence/date-evidence.component';

const routes: Routes = [
  {path: 'professors', component: ProfesorListComponent, canActivate: [AdminGuardService]},
  {path: 'addprofesor', component: ProfesorAddComponent, canActivate: [AdminGuardService]},
  {path: 'editprofesor/:id', component: ProfesorEditComponent, canActivate: [AdminGuardService]},
  {path: 'deleteprofesor/:id', component: ProfesorListComponent, canActivate: [AdminGuardService]},
  {path: 'classrooms', component: ClassroomsListComponent, canActivate: [AdminGuardService]},
  {path: 'addClassroom', component: ClassroomAddComponent, canActivate: [AdminGuardService]},
  {path: 'editClassroom/:id', component: ClassroomEditComponent, canActivate: [AdminGuardService]},
  {path: 'materies', component: MateriaListComponent, canActivate: [AdminGuardService]},
  {path: 'addmateria', component: AddMateriaComponent, canActivate: [AdminGuardService]},
  {path: 'editmateria/:id', component: MateriaEditComponent, canActivate: [AdminGuardService]},
  {path: 'dates', component: DateListComponent, canActivate: [AdminGuardService]},
  {path: 'addDate', component: DatesAddComponent, canActivate: [AdminGuardService]},
  {path: '', component: LoginComponent},
  {path: 'profmateria/:id', component: ProfessorMateriaComponent, canActivate: [AdminGuardService]},
  {path: 'students', component: StudentListComponent, canActivate: [AdminGuardService]},
  {path: 'studentadd', component: StudentAddComponent, canActivate: [AdminGuardService]},
  {path: 'groups', component: GroupListComponent, canActivate: [AdminGuardService]},
  {path: 'addgroup', component: GroupAddComponent, canActivate: [AdminGuardService]},
  {path: 'group-students/:id', component: GroupStudentsComponent, canActivate: [AdminGuardService]},
  {path: 'addPerson', component: AddPersonComponent},
  {path: 'group/:id', component: GroupComponent, canActivate: [AdminGuardService]},
  {path: 'date/prof', component: DateProfComponent, canActivate: [AdminGuardService]},
  {path: 'evidence/:id', component: DateEvidenceComponent, canActivate: [AdminGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
