import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService{

    constructor(private http: HttpClient){}
    SaveStudent(data:any):Observable<any>{
        return this.http.post<any>('http://localhost:8080/saveStudent',data);
    }
    UpdateStudent(data:any):Observable<any>{
        return this.http.put<any>('http://localhost:8080/updateStudent',data);
    }
    DeleteStudent(rollNo: any){
        return this.http.delete("http://localhost:8080/deleteStudent/" + rollNo);
    }
    GetAllStudents():Observable<any[]> {
        return this.http.get<any>('http://localhost:8080/getAllStudents');
    }
}