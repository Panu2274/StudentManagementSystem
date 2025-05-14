import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Admin } from 'src/app/admin/admin';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  allStudents:Admin[]=[];
  constructor (private studService:StudentService){}

  ngOnInit(): void {
    this.studService.getAll().subscribe((data)=>{
      this.allStudents=data;
    })
  }

}
