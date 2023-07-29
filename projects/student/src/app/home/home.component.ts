import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private data: DataService, private router: Router){}
  GetAllStudents:any[] = [];
  ngOnInit(): void{
    this.data.GetAllStudents().subscribe(student => this.GetAllStudents=student);
  }
  onGetStudentData(data:any){
    return this.GetAllStudents;
  }
}
