import { Component } from '@angular/core';
import { UserService, User } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  dob: string = '';
  mobno: string = '';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  role: 'admin' | 'student' = 'student';

  constructor(private userService: UserService, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const newUser: Omit<User, 'id'> = {
      name: this.name,
      dob: this.dob,
      mobno: this.mobno,
      username: this.username,
      password: this.password,
      role: this.role
    };

    this.userService.register(newUser).subscribe({
      next: () => {
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error registering user:', error);
        alert('Registration failed. Please try again later.');
      }
    });
  }
}
