import { Component, OnInit } from '@angular/core';
import {AbsensesService} from "../../services/absenses.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-absense-details',
  templateUrl: './absense-details.component.html',
  styleUrls: ['./absense-details.component.css']
})
export class AbsenseDetailsComponent implements OnInit {
  errorMessage: any;
  absense: any;
  absenseId!: number;

  constructor(private absenseService: AbsensesService, private route: ActivatedRoute, private router: Router) {
    this.absenseId = this.route.snapshot.params['absenseID'];
  }

  ngOnInit(): void {
    this.absenseService.getAbsenseById(this.absenseId).subscribe({
      next : (data)=>{
        this.absense = data;
      },
      error : (err)=>{}
    })
  }

  handelDeleteAbsense(id : number) {
    this.absenseService.deleteAbsense(id);
    this.router.navigateByUrl("absenses");
  }
}
