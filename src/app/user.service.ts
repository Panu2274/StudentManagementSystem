import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';

export interface User {
  id: number ;
  name: string;
  dob: string;
  mobno: string;
  username: string;
  password: string;
  role: 'admin' | 'student';
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserId: number | null = null;

  private apiUrl = 'http://localhost:3001/users';
  constructor( private http:HttpClient) {}


  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:3001/users");
  }
  
  register(newUser: Omit<User, 'id'>): Observable<User> {
    // Fetch existing users to get the max ID
    return this.getUsers().pipe(
      map((users: User[]) => {
        const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
       
        const userWithId = { ...newUser, id: (maxId + 1).toString() };
        return userWithId;
      }),
      switchMap((userWithId) => {
        
        return this.http.post<User>('http://localhost:3001/users', userWithId);
      })
    );
  }
  setCurrentUserId(id: number) {
    this.currentUserId = id;
    localStorage.setItem('currentUserId', id.toString());
  }

  getCurrentUserId(): string | null {
    const id = localStorage.getItem('currentUserId');
    return id ? id : null;
  
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:3001/users/${id}`);
  }
  

  getCurrentUser(): Observable<User | undefined> {
    const id = this.getCurrentUserId();
    if (id === null) return of(undefined);
    
    return this.http.get<User>(`http://localhost:3001/users/${id}`);
  }
  
}
