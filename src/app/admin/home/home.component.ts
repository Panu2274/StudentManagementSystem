import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  adminName: string='';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe({
      next: (user) => {
        if (user?.role === 'admin') {
          this.adminName = user.name;
        }
      },
      error: (err) => {
        console.error('Failed to load current user:', err);
      }
    });
  }
  
}
