import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http:HttpClient) {}

  getAll(){
    return this.http.get<Admin[]>("http://localhost:3000/students")
  }


  create(data :Admin){
    return this.http.post("http://localhost:3000/students",data);

  }


  edit(id:number){
    return this.http.get<Admin>(`http://localhost:3000/students/${id}`);
  }

  update(data:Admin){
    return this.http.put<Admin>(`http://localhost:3000/students/${data.id}`,data);
  }

  delete(id:number){
    return this.http.delete<Admin>(`http://localhost:3000/students/${id}`);
  }

}
