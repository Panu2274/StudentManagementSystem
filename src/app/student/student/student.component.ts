import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  currentUserId: number | null = null;

  constructor(private userService: UserService, private router: Router) {
    this.currentUserId = Number(this.userService.getCurrentUserId());
  }

  logout() {
    localStorage.removeItem('currentUserId');
    this.router.navigate(['/login']);
  }
}
