import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UnauthorisedComponent } from './public/unauthorised/unauthorised.component';
import { InvitationExpiredComponent } from './public/invitation-expired/invitation-expired.component';
import { ForgotPasswordComponent } from './public/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'invitation-expired', component: InvitationExpiredComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'unauthorised', component: UnauthorisedComponent },
];

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    UnauthorisedComponent,
    ForgotPasswordComponent,
    InvitationExpiredComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
  ]
})
export class CoreModule { }