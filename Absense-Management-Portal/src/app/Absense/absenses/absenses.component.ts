import { Component, OnInit } from '@angular/core';
import {AbsensesService} from "../../services/absenses.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-absenses',
  templateUrl: './absenses.component.html',
  styleUrls: ['./absenses.component.css']
})
export class AbsensesComponent implements OnInit {
  errorMessage: any;
  absenses: any;

  constructor(private absenseService : AbsensesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.absenseService.getAbsenses().subscribe({
      next : (data)=>{
        this.absenses = data;
      },
      error : (err)=>{}
    })
  }

  handelAbsenseDetails(id : number) {
    this.router.navigateByUrl("absense-details/"+id);
  }

  handelDeleteAbsense(id : number) {
    this.absenseService.deleteAbsense(id);
    window.location.reload();
  }
}
