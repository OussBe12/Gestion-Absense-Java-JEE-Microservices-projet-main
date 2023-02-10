import { Component, OnInit } from '@angular/core';
import {ClassroomsService} from "../../services/classrooms.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  newStudentFormgroup!: FormGroup;
  classroom: any;

  constructor(private classroomService : ClassroomsService, private route : ActivatedRoute, private router: Router,
              private fb : FormBuilder, private studentService : StudentsService) { }

  ngOnInit(): void {
    this.newStudentFormgroup = this.fb.group({
      fullName : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      birthDate : this.fb.control(null, [Validators.required]),
      gender : this.fb.control(null, [Validators.required, Validators.minLength(2)]),
      Phone : this.fb.control(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      cin : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      address : this.fb.control(null, [Validators.minLength(4)]),
      Classroom : this.fb.control(null, [Validators.required])
    })
    this.classroomService.getClassrooms().subscribe({
      next: (data) => {
        this.classroom = data;
        console.log(data);
      },
      error : (err) =>{}
    })

  }

  handleSaveStudent() {
    let student:any = this.newStudentFormgroup.value;
    this.studentService.saveStudent(student).subscribe({
      next : data =>{
        alert("Student has been successfully saved!");
        // this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("/students");

      },
      error : err =>{
        console.log(err);
      }
    })
  }
}
