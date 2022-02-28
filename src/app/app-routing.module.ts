import { CategoryComponent } from './category/category.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:"dashboard",component:DashboardComponent},
  {path:"users",component:UsersComponent},
  {path:"category",component:CategoryComponent},
  {path:"jobs",loadChildren:()=>import("./jobs/jobs.module").then(mod=>mod.JobsModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
