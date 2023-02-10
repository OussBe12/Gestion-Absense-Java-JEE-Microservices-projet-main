import { Component, OnInit } from '@angular/core';
import {ProfessorsService} from "../../services/professors.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {
  errorMessage!: string;
  professors: any;

  constructor(private professorsService: ProfessorsService, private router : Router) {
  }

  ngOnInit(): void {
    this.professorsService.getProfessors().subscribe({
      next: (data)=>{
        this.professors = data;
      },
      error : (err)=>{}
    })
  }

  handelAddProf(){
    this.router.navigateByUrl("new-professor");
  }
  handelDeleteProfessor(id:number){
    this.professorsService.deleteProfessor(id);
    window.location.reload();
  }
  handelProfessorDetails(id:number){
    this.router.navigateByUrl("/detailProf/"+id);
  }

}
