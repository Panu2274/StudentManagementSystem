import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  userRole: 'guest' | 'user' | 'admin' = 'guest'; 

  setRole(role: 'guest' | 'user' | 'admin') {
    this.userRole = role;
  }
}
