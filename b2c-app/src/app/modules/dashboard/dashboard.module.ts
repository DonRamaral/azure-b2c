import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MsalModule } from '@azure/msal-angular';
import { CustomGuard } from 'src/app/services/guards/custom.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full', canActivate: [ CustomGuard ] }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MsalModule
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
