import { Component, OnInit } from '@angular/core';
import {ClassroomsService} from "../../services/classrooms.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {
  errorMessage: any;
  classrooms: any;

  constructor(private classroomsService : ClassroomsService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.classroomsService.getClassrooms().subscribe({
      next: (data)=>{
        this.classrooms = data;
      },
      error : (err)=>{}
    })
  }

  handelAddClassroom() {
    this.router.navigateByUrl("new-classroom");
  }

  handelClassroomDetails(id : number) {
    this.router.navigateByUrl("detailClassroom/"+ id);
  }

  handelDeleteClassroom(id : number) {
    this.classroomsService.deleteClassroom(id);
    window.location.reload();
  }
}
