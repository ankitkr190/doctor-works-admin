import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { DeletedJobsComponent } from './deleted-jobs/deleted-jobs.component';

const routes: Routes = [
  {path:"all-jobs",component:AllJobsComponent},
  {path:"applied-jobs",component:AppliedJobsComponent},
  {path:"deleted-jobs",component:DeletedJobsComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
