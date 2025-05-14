import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,  
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'view', component: ViewStudentComponent },
      { path: 'add', component: AddStudentComponent },
      { path: 'edit', component: EditStudentComponent },
      { path: 'update/:id',component:UpdateComponent},
      { path: 'profile/:id', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
