import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClassroomsService {

  constructor(private http : HttpClient) { }

  public getClassrooms():Observable<any>{
    return this.http.get(environment.backendHost + "STUDENT-SERVICE/classrooms");
  }
  public getClassroomById(id:number){
    return this.http.get(environment.backendHost + "STUDENT-SERVICE/classrooms/"+id);
  }
  public deleteClassroom(id:number){
    return this.http.delete(environment.backendHost + "STUDENT-SERVICE/classrooms/"+id).subscribe();
  }
  public updateClassrooms(id: number, classroom: any){
    return this.http.put(environment.backendHost + "STUDENT-SERVICE/classrooms/"+id, classroom);
  }
  public saveClassrooms(classroom:any){
    return this.http.post(environment.backendHost + "STUDENT-SERVICE/classrooms/", classroom);
  }
}
