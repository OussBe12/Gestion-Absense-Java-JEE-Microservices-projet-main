import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Absense} from "../Models/Absense.model";
import {AbsensesService} from "./absenses.service";
import {Session} from "../Models/Session.model";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http : HttpClient, private absenseService : AbsensesService) { }
  public getCourses():Observable<any>{
    return this.http.get(environment.backendHost + "COURS-SERVICE/cours");
  }
  public getCoursById(id: number){
    return this.http.get(environment.backendHost + "COURS-SERVICE/cours/"+id);
  }
  public deleteCours(id: number){
    this.absenseService.deleteAbsensesByCoursId(id);
    return this.http.delete(environment.backendHost + "COURS-SERVICE/cours/"+id).subscribe();
  }
  public updateCours(id: number, cours: any){
    return this.http.put(environment.backendHost + "COURS-SERVICE/cours/"+id, cours);
  }
  public saveCours(cours: any){
    return this.http.post(environment.backendHost + "COURS-SERVICE/cours", cours);
  }
  public saveSession(session : Session):Observable<Session>{
    return this.http.post<Session>(environment.backendHost + "COURS-SERVICE/cours/session", session);
  }
}
