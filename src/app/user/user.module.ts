import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { ViewUserComponent } from './view-user/view-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
