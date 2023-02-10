import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorsComponent } from './Professor/professors/professors.component';
import { StudentsComponent } from './Student/students/students.component';
import { CoursesComponent } from './Cours/courses/courses.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ClassroomsComponent } from './Classroom/classrooms/classrooms.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailsComponent } from './Professor/details/details.component';
import { NewProfessorComponent } from './Professor/new-professor/new-professor.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewStudentComponent } from './Student/new-student/new-student.component';
import { DetailStudentComponent } from './Student/detail-student/detail-student.component';
import { DetailClassroomComponent } from './Classroom/detail-classroom/detail-classroom.component';
import { NewClassroomComponent } from './Classroom/new-classroom/new-classroom.component';
import { CoursDetailsComponent } from './Cours/cours-details/cours-details.component';
import { NewCoursComponent } from './Cours/new-cours/new-cours.component';
import { AbsensesComponent } from './Absense/absenses/absenses.component';
import { NewAbsenseComponent } from './Absense/new-absense/new-absense.component';
import { AbsenseDetailsComponent } from './Absense/absense-details/absense-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessorsComponent,
    StudentsComponent,
    CoursesComponent,
    NavBarComponent,
    ClassroomsComponent,
    DetailsComponent,
    NewProfessorComponent,
    NewStudentComponent,
    DetailStudentComponent,
    DetailClassroomComponent,
    NewClassroomComponent,
    CoursDetailsComponent,
    NewCoursComponent,
    AbsensesComponent,
    NewAbsenseComponent,
    AbsenseDetailsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
