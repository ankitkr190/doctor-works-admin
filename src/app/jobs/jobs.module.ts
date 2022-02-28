import { JobsRoutingModule } from './jobs-routing.module';
import { DeletedJobsComponent } from './deleted-jobs/deleted-jobs.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AllJobsComponent,
    AppliedJobsComponent,
    DeletedJobsComponent
   
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
