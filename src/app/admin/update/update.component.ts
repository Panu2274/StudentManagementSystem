import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { __param } from 'tslib';
import { Admin } from '../admin';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


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
  

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      
      this.route.paramMap.subscribe((param)=>{
        let id=Number(param.get('id'))
        this.getById(id)
      })
    }

    getById(id:number){

      this.adminService.edit(id).subscribe((data)=>{
      this.student=data;
      })
    }

    update(){
      
      this.adminService.update(this.student).subscribe({

        next:(data)=>{
          this.router.navigate(["/admin/view"]);
        },
        error:(er)=>{
          console.log(er);
        }
      })
    }
}
