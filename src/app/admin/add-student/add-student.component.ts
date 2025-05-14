import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { Admin } from '../admin';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {


  constructor(private adminService:AdminService,private router:Router){}

    student:Admin ={

    id:0 ,
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '',
    mobile: '',
    address: '',
    email: ''
    }
  

    create(){

      this.adminService.create(this.student).subscribe({

        next:(data)=>{
          this.router.navigate(["/admin/view"]);
        },
        error:(er)=>{
          console.log(er);
        }
      })
    }

}