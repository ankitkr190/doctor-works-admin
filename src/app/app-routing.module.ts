import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:"dashboard",component:DashboardComponent},
  {path:"category",component:CategoryComponent},
  {path:"user",loadChildren:()=>import("./user/user.module").then(mod=>mod.UserModule)},
  {path:"jobs",loadChildren:()=>import("./jobs/jobs.module").then(mod=>mod.JobsModule) },
  {path:"post",loadChildren:()=>import("./post/post.module").then(mod=>mod.PostModule)},
  {path:"news",loadChildren:()=>import("./news/news.module").then(mod=>mod.NewsModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
