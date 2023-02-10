import { Component, OnInit } from '@angular/core';
import {ProfessorsService} from "../../services/professors.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../services/courses.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-professor',
  templateUrl: './new-professor.component.html',
  styleUrls: ['./new-professor.component.css']
})
export class NewProfessorComponent implements OnInit {
  cours : any;
  newProfFormgroup!: FormGroup;

  constructor(private professorService : ProfessorsService, private route : ActivatedRoute, private router : Router,
              private coursService : CoursesService, private fb : FormBuilder) { }
  ngOnInit(): void {
    this.newProfFormgroup = this.fb.group({
      name : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      Speciality : this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      Phone : this.fb.control(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      cours : this.fb.control(null, [Validators.required])
    });
    this.coursService.getCourses().subscribe({
      next: (data) =>{
        console.log("works")
        this.cours = data;
        console.log(data)
      },
      error : (err)=>{}
    })
  }

  handleSaveProfessor() {
    let professor:any=this.newProfFormgroup.value;
    this.professorService.saveProfessor(professor).subscribe({
      next : data =>{
        alert("Professor has been successfully saved!");
        // this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("/professors");

      },

      error : err =>{
        console.log(err);
      }
    });
  }
}
