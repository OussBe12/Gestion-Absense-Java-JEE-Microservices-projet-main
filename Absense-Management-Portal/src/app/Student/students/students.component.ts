import { Component, OnInit } from '@angular/core';
import {ProfessorsService} from "../../services/professors.service";
import {Router} from "@angular/router";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any;
  errorMessage: any;

  constructor(private studentService: StudentsService, private router : Router ) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe({
      next: (data) =>{
        this.students = data;
      },
      error : (err)=>{}
    });
  }

  handelAddStudent() {
    this.router.navigateByUrl("new-student");
  }

  handelStudentDetails(id: number) {
    this.router.navigateByUrl("/detailStudent/"+id);
  }

  handelDeleteStudent(id: number) {
    this.studentService.deleteStudent(id);
  }
}
