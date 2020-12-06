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

const routes: Routes = [
  {path: 'professors', component: ProfesorListComponent},
  {path: 'addprofesor', component: ProfesorAddComponent},
  {path: 'editprofesor/:id', component: ProfesorEditComponent},
  {path: 'deleteprofesor/:id', component: ProfesorListComponent},
  {path: 'classrooms', component: ClassroomsListComponent},
  {path: 'addClassroom', component: ClassroomAddComponent},
  {path: 'editClassroom/:id', component: ClassroomEditComponent},
  {path: 'materies', component: MateriaListComponent},
  {path: 'addmateria', component: AddMateriaComponent},
  {path: 'editmateria/:id', component: MateriaEditComponent},
  {path: 'dates', component: DateListComponent},
  {path: 'addDate', component: DatesAddComponent},
  {path: '', component: LoginComponent},
  {path: 'profmateria/:id', component: ProfessorMateriaComponent},
  {path: 'students', component: StudentListComponent},
  {path: 'studentadd', component: StudentAddComponent},
  {path: 'groups', component: GroupListComponent},
  {path: 'addgroup', component: GroupAddComponent},
  {path: 'group-students/:id', component: GroupStudentsComponent},
  {path: 'addPerson', component: AddPersonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
