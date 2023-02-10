import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../../services/students.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassroomsService} from "../../services/classrooms.service";

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
  errorMessage: any;
  student: any;
  studentID!: number;
  classroom: any;
  constructor(private studentService : StudentsService, private route : ActivatedRoute, private router: Router,
              private classroomService: ClassroomsService) {
    this.studentID = route.snapshot.params['studentID'];
  }

  ngOnInit(): void {
    this.studentService.getStudentById(this.studentID).subscribe({
      next: (data)=>{
        this.student = data;
        this.classroomService.getClassroomById(this.student.classroomId).subscribe({
          next: (data)=>{
            this.classroom = data;
          },
          error : (err) =>{}
        })
      },
      error : (err)=>{}
    })
  }

  handelAddStudent() {
    this.router.navigateByUrl("new-student");
  }

  handelDeleteStudent(id: number) {
    this.studentService.deleteStudent(id);
  }
}
