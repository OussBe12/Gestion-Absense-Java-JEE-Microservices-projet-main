import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../../services/courses.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassroomsService} from "../../services/classrooms.service";
import {ProfessorsService} from "../../services/professors.service";
import {StudentsService} from "../../services/students.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {elementAt} from "rxjs";
import {AbsensesService} from "../../services/absenses.service";
import {Absense} from "../../Models/Absense.model";
import {Session} from "../../Models/Session.model";

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit {
  course: any;
  errorMessage!: string;
  coursID!: number;
  students: any;
  listId: Array<number> = [];
  constructor(private coursService: CoursesService, private router: Router, private route: ActivatedRoute,
              private studentService : StudentsService, private fb: FormBuilder, private absenseService : AbsensesService) {
    this.coursID = this.route.snapshot.params['coursID'];
  }

  ngOnInit(): void {
    this.coursService.getCoursById(this.coursID).subscribe({
      next : (data)=>{
        this.course = data;
        this.studentService.getStudentsByClass(this.course.classroomId).subscribe({
          next: (data)=>{
            this.students = data;
            console.log(data);
          },
          error: (err)=>{}
        })
      },
      error : (err)=>{}
    })
  }

  handelAddCours() {

  }

  handelDeleteCours(id: number) {

  }
  public handelCreateSession(){
    let session : Session = new Session();
    session.coursId = this.coursID;
    session.starterDate = new Date();
    session.closeDate = session.starterDate + this.course.duration;
    return this.coursService.saveSession(session).subscribe();
  }
  handelStudentAbsense() {
    let session: any;
    session = this.handelCreateSession();
    for (let i = 0; i < this.listId.length; i++) {
        let absense : Absense = new Absense();
        absense.coursId = this.course.id;
        absense.professorId = this.course.professorId;
        absense.classroomId = this.course.classroomId;
        absense.studentId = this.listId[i];
        absense.status = true;
        absense.sessionId = session.id;
        this.absenseService.saveAbsense(absense).subscribe();
        console.log(absense);
    }
    console.log("Absense has been succefuly saved");
    this.router.navigateByUrl("cours");
  }

  onChange(id: number) {
    console.log(id);
    this.listId.push(id);
  }
}
