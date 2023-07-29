import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit{
  constructor(private data: DataService, private router: Router){}

  ngOnInit(): void{

  }
 
  onDeleteStudentClick(data:any){
    this.data.DeleteStudent(data.rollNo).subscribe();
    alert("Student deleted Successfully..")
    this.router.navigate(['home']);
  }
}
