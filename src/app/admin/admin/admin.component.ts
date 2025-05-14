import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userId: string | null = null;  

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const id = this.userService.getCurrentUserId();
    if (id !== null) {
      this.userId = id;
    }
  }
}