import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfesorListComponent } from './profesors/components/profesor-list/profesor-list.component';
import {NgbDateParserFormatter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfesorAddComponent } from './profesors/components/profesor-add/profesor-add.component';
import { ProfesorEditComponent } from './profesors/components/profesor-edit/profesor-edit.component';
import { ClassroomsListComponent } from './classrooms/components/classrooms-list/classrooms-list.component';
import { ClassroomAddComponent } from './classrooms/components/classroom-add/classroom-add.component';
import { ClassroomEditComponent } from './classrooms/components/classroom-edit/classroom-edit.component';
import { MateriaListComponent } from './materies/components/materia-list/materia-list.component';
import { AddMateriaComponent } from './materies/components/add-materia/add-materia.component';
import { MateriaEditComponent } from './materies/components/materia-edit/materia-edit.component';
import { MenuComponent } from './common/component/menu/menu.component';
import { DateListComponent } from './dates/components/date-list/date-list.component';
import { DatesAddComponent } from './dates/components/dates-add/dates-add.component';
import {DatePipe} from '@angular/common';
import { TestComponent } from './test/test/test.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { ProfessorMateriaComponent } from './profesors/components/professor-materia/professor-materia.component';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorListComponent,
    ProfesorAddComponent,
    ProfesorEditComponent,
    ClassroomsListComponent,
    ClassroomAddComponent,
    ClassroomEditComponent,
    MateriaListComponent,
    AddMateriaComponent,
    MateriaEditComponent,
    MenuComponent,
    DateListComponent,
    DatesAddComponent,
    TestComponent,
    ProfessorMateriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgSelectModule
  ],
  bootstrap: [AppComponent],
  providers: [DatePipe]
})
export class AppModule { }