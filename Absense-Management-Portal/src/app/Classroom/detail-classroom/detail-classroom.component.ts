import { Component, OnInit } from '@angular/core';
import {ClassroomsService} from "../../services/classrooms.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-detail-classroom',
  templateUrl: './detail-classroom.component.html',
  styleUrls: ['./detail-classroom.component.css']
})
export class DetailClassroomComponent implements OnInit {
  classroom: any;
  classroomID!: number;
  errorMessage: any;
  students: any;

  constructor(private classroomService : ClassroomsService, private route: ActivatedRoute, private router: Router,
              private studentService : StudentsService) {
    this.classroomID = this.route.snapshot.params['classroomID'];
  }

  ngOnInit(): void {
    this.classroomService.getClassroomById(this.classroomID).subscribe({
      next: (data) =>{
        this.classroom = data;
        this.studentService.getStudentsByClass(this.classroomID).subscribe({
          next: (data) =>{
            this.students = data;
            console.log(this.students);
          }
        })
      },
      error : (err) =>{}
    })
  }

  handelAddClassroom() {
    this.router.navigateByUrl("new-classroom");
  }

  handelDeleteClassroom(id: number) {
    this.classroomService.deleteClassroom(id);
    this.router.navigateByUrl("classroom");
  }

  handelClassroomDetails(id : number) {

  }
}
