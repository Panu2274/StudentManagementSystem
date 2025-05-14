import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  users: User[] = [];

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  login() {
    const matchedUser = this.users.find(
      user => user.username === this.username && user.password === this.password
    );

    if (matchedUser) {
      this.userService.setCurrentUserId(Number(matchedUser.id));

      alert(`Login successful as ${matchedUser.role}`);
      if (matchedUser.role === 'admin') {
        this.router.navigate(['/admin/home']);  
      } else if (matchedUser.role === 'student') {
        this.router.navigate(['/student/dashboard']);
      }
    } else {
      alert('Invalid credentials');
    }
  }
}
