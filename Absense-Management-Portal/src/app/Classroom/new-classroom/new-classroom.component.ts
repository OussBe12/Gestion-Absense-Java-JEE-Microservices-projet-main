import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClassroomsService} from "../../services/classrooms.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-classroom',
  templateUrl: './new-classroom.component.html',
  styleUrls: ['./new-classroom.component.css']
})
export class NewClassroomComponent implements OnInit {
  newClassroomFormgroup!: FormGroup;

  constructor(private classroomService : ClassroomsService, private route : ActivatedRoute, private router : Router,
              private fb : FormBuilder) { }

  ngOnInit(): void {
    this.newClassroomFormgroup = this.fb.group({
      fullName : this.fb.control(null, [Validators.required, Validators.minLength(4)])
    })
  }

  handleSaveClassroom() {
    let classroom : any = this.newClassroomFormgroup.value;
    this.classroomService.saveClassrooms(classroom).subscribe({
      next : (data)=>{
        alert("Group has been successfully saved!");
        this.router.navigateByUrl("classroom");
      },
      error : (err)=>{}
    })
  }
}
