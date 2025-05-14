import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../admin/admin';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor( private http:HttpClient) {}

  getAll(){
    return this.http.get<Admin[]>("http://localhost:3000/students")
  }

  
  create(data :Admin){
    return this.http.post("http://localhost:3000/students",data);

  }


}
