import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';  // Import routing module
import { HomeComponent } from './home/home.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component'; // Admin component
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    HomeComponent,
    EditStudentComponent,
    ViewStudentComponent,
    AddStudentComponent,
    ProfileComponent,
    AdminComponent,
    UpdateComponent  // Admin wrapper component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule  // Only import routing here
  ]
})
export class AdminModule { }
