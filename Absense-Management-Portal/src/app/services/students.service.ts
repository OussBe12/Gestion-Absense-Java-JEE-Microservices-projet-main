import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http : HttpClient) { }

  public getStudents():Observable<any>{
    return this.http.get(environment.backendHost + "STUDENT-SERVICE/students");
  }
  public getStudentById(id:number){
    return this.http.get(environment.backendHost + "STUDENT-SERVICE/students/"+id);
  }
  public deleteStudent(id: number){
    return this.http.delete(environment.backendHost + "STUDENT-SERVICE/students/"+id).subscribe();
  }
  public updateStudent(id: number, student: any){
    return this.http.put(environment.backendHost + "STUDENT-SERVICE/students/"+id, student);
  }
  public saveStudent(student:any){
    return this.http.post(environment.backendHost + "STUDENT-SERVICE/students/", student);
  }
  public getStudentsByClass(id : number):Observable<any>{
    return this.http.get(environment.backendHost + "STUDENT-SERVICE/classrooms/"+id+"/students");
  }

}
