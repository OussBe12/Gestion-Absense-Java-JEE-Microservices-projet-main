import { Component, OnInit } from '@angular/core';
import {ProfessorsService} from "../../services/professors.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CoursesService} from "../../services/courses.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  professor: any;
  errorMessage!: string;
  professorID!: number;
  cours : any;


  constructor(private professorService : ProfessorsService, private route : ActivatedRoute, private router: Router,
              private coursService: CoursesService) {
    this.professorID = route.snapshot.params['professorID'];
  }

  ngOnInit(): void {
    this.professorService.getProfessorById(this.professorID).subscribe({
      next: (data)=>{
        this.professor = data;
        this.coursService.getCoursById(this.professor.coursID).subscribe({
          next: (data)=>{
            this.cours = data;
          },
          error: (err) =>{}
        });
      },
      error: (err) => {}
    })

  }

  handelDeleteProfessor(professor: any){
    this.professorService.deleteProfessor(professor.id);
    this.router.navigateByUrl('/professors');
  }
  handelUpdateProfessor(professor: any){
    this.router.navigateByUrl("detailProf/", {state:professor});
  }
  handelAddProf(){
    this.router.navigateByUrl("new-professor");
  }
}
