import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class DataService{
    private URL = "http://localhost:8080";
    constructor(private http: HttpClient){}
    SaveStudent(data:any):Observable<any>{
        return this.http.post<any>(`${this.URL}/saveStudent`,data);
    }
    UpdateStudent(data:any):Observable<any>{
        return this.http.put<any>(`${this.URL}/updateStudent`,data);
    }
    DeleteStudent(rollNo: any):Observable<any>{
        return this.http.delete(`${this.URL}/deleteStudent/` + rollNo);
    }
    GetAllStudents():Observable<any[]> {
        return this.http.get<any>(`${this.URL}/getAllStudents`);
    }
}