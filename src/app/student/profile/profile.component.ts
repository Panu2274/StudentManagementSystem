import { Component, OnInit } from '@angular/core';
import { User, UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
// Ensure User is imported correctly

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User | null = null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Fetch user ID from the route parameter
    const userId = Number(this.route.snapshot.paramMap.get('id')); // Use snapshot to fetch 'id' from URL

    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (user: User) => {
          this.currentUser = user;  // Assign the user data to currentUser
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    }
  }
}
