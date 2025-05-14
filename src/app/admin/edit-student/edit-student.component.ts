import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  allStudents: Admin[] = [];

  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    this.adminService.getAll().subscribe((data)=>{
      this.allStudents=data;
    })
  }
  deleteItem(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this student?');
    if (!confirmDelete) return;

    this.adminService.delete(id).subscribe({
      next: () => {
        this.allStudents = this.allStudents.filter(student => student.id !== id);
      },
      error: (err) => {
        console.error(`Failed to delete student with id ${id}`, err);
      }
    });
  }
}
