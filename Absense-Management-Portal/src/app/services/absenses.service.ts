import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Absense} from "../Models/Absense.model";

@Injectable({
  providedIn: 'root'
})
export class AbsensesService {

  constructor(private http: HttpClient) { }

  public getAbsenses():Observable<any>{
    return this.http.get(environment.backendHost + "ABSENSE-SERVICE/absenses");
  }
  public getAbsenseById(id:number){
    return this.http.get(environment.backendHost + "ABSENSE-SERVICE/absenses/"+id);
  }
  public deleteAbsense(id: number){
    return this.http.delete(environment.backendHost + "ABSENSE-SERVICE/absenses/"+id).subscribe();
  }
  public saveAbsense(absense: Absense):Observable<Absense>{
    return this.http.post<Absense>(environment.backendHost + "ABSENSE-SERVICE/absenses", absense);
  }
  public deleteAbsensesByCoursId(id: number){
    return this.http.delete(environment.backendHost + "ABSENSE-SERVICE/absenses/cours/"+id).subscribe();
  }
}
