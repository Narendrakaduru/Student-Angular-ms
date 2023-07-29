import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private data: DataService, private router: Router){}

  ngOnInit(): void{

  }
  onSaveStudentClick(data:any){
    this.data.SaveStudent(data).subscribe();
    alert("Student added Successfully..")
    this.router.navigate(['home']);
  }
}
