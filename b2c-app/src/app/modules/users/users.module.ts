import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { InsertComponent } from './insert/insert.component';
import { HttpClientModule } from '@angular/common/http';
import { MsalModule } from '@azure/msal-angular';
import { UsersGuard } from 'src/app/services/guards/users.guard';

const routes: Routes = [
  { path: 'users', component: UsersComponent, pathMatch: 'full', canActivate: [ UsersGuard ] },
  { path: 'users/insert', component: InsertComponent, pathMatch: 'full', canActivate: [ UsersGuard ] }
];

@NgModule({
  declarations: [UsersComponent, GridComponent, InsertComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MsalModule
  ],
  exports: [
    RouterModule
  ]
})
export class UsersModule { }
