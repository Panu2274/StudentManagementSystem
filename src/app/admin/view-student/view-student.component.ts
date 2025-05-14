import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent  implements OnInit{

  allStudents:Admin[]=[];
  constructor (private adminService:AdminService){}

  ngOnInit(): void {
    this.adminService.getAll().subscribe((data)=>{
      this.allStudents=data;
    })
  }
}
