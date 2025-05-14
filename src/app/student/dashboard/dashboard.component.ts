import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';  // Ensure to import your User service to fetch current user data
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // Fetch current user data using user service
    const userId = this.userService.getCurrentUserId();
    if (userId) {
      this.userService.getCurrentUser().subscribe((userData) => {
        this.currentUser = userData;
      });
    } else {
      // Redirect to login if no user is logged in
      this.router.navigate(['/login']);
    }
  }
  generateMotivationalMessage(user: any): string {
    // Example logic to generate a dynamic motivational message based on role or name
    if (user.id % 3 === 0) {
      return 'Lead with vision, inspire others!';
    } else if (user.id % 5 === 0) {
      return `Keep pushing forward, ${user.name}, the future is yours!`;
    }else
    return 'Education is the key to unlocking the world, a passport to freedom.';
  }
}
