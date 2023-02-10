import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfessorsComponent} from "./Professor/professors/professors.component";
import {StudentsComponent} from "./Student/students/students.component";
import {CoursesComponent} from "./Cours/courses/courses.component";
import {ClassroomsComponent} from "./Classroom/classrooms/classrooms.component";
import {DetailsComponent} from "./Professor/details/details.component";
import {NewProfessorComponent} from "./Professor/new-professor/new-professor.component";
import {DetailStudentComponent} from "./Student/detail-student/detail-student.component";
import {NewStudentComponent} from "./Student/new-student/new-student.component";
import {DetailClassroomComponent} from "./Classroom/detail-classroom/detail-classroom.component";
import {NewClassroomComponent} from "./Classroom/new-classroom/new-classroom.component";
import {NewCoursComponent} from "./Cours/new-cours/new-cours.component";
import {CoursDetailsComponent} from "./Cours/cours-details/cours-details.component";
import {AbsensesComponent} from "./Absense/absenses/absenses.component";
import {AbsenseDetailsComponent} from "./Absense/absense-details/absense-details.component";
import {NewAbsenseComponent} from "./Absense/new-absense/new-absense.component";

const routes: Routes = [
  {path : "professors", component: ProfessorsComponent},
  {path : "detailProf/:professorID", component: DetailsComponent},
  {path : "new-professor", component: NewProfessorComponent},
  {path : "students", component: StudentsComponent},
  {path : "detailStudent/:studentID", component: DetailStudentComponent},
  {path : "new-student", component: NewStudentComponent},
  {path : "cours", component: CoursesComponent},
  {path: "new-cours", component: NewCoursComponent},
  {path: "cours-details/:coursID", component: CoursDetailsComponent},
  {path : "classroom", component: ClassroomsComponent},
  {path : "detailClassroom/:classroomID", component: DetailClassroomComponent},
  {path : "new-classroom", component: NewClassroomComponent},
  {path : "absenses", component: AbsensesComponent},
  {path : "absense-details/:absenseID", component: AbsenseDetailsComponent},
  {path : "new-absense", component: NewAbsenseComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
