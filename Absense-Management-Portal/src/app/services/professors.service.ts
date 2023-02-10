import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  constructor(private http : HttpClient) { }

  public getProfessors():Observable<any> {
    return this.http.get(environment.backendHost + "PROFESSORS-SERVICE/professors");
  }
  public getProfessorById(id:number){
    return this.http.get(environment.backendHost + "PROFESSORS-SERVICE/professors/"+id);
  }

  public deleteProfessor(id: number){
    return this.http.delete(environment.backendHost + "PROFESSORS-SERVICE/professors/"+id).subscribe();
  }
  public updateProfessor(id:number, professor:any){
    return this.http.put(environment.backendHost + "PROFESSORS-SERVICE/professors/"+id, professor);
  }
  public saveProfessor(professor:any){
    return this.http.post(environment.backendHost + "PROFESSORS-SERVICE/professors/", professor);
  }
}
