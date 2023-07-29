import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  constructor(private data: DataService, private router: Router){}

  ngOnInit(): void{

  }
  onUpdateStudentClick(data:any){
    this.data.UpdateStudent(data).subscribe();
    alert("Student updated Successfully..")
    this.router.navigate(['home']);
  }
}
