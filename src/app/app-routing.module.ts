import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AuthComponent} from './auth/auth.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import {StudentlistComponent}from './studentlist/studentlist.component'
import { StudentDetailsComponent } from './student-details/student-details.component';
const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'course/:courseId', component: StudentlistComponent },
  { path: 'student-details', component: StudentDetailsComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
