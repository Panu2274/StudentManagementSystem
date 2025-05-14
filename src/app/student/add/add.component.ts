import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin/admin';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {


  constructor(private studService:StudentService,private router:Router){}

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

      this.studService.create(this.student).subscribe({

        next:(data)=>{
          this.router.navigate(["/student/view"]);
        },
        error:(er)=>{
          console.log(er);
        }
      })
    }

}