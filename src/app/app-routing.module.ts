import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard/dashboard2/dashboard2.component';
import { HomescreenComponent } from './homescreen/homescreen/homescreen.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './auth/auth.guard'

export const routes: Routes = [
  {path: '',  pathMatch: 'full', redirectTo: '/login'},
  {path: 'home',  pathMatch: 'full', redirectTo: '/homescreen'},
  {path: 'login', component: LoginComponent},
  {path: 'homescreen', component:  HomescreenComponent, canActivate:[AuthGuard],
  children: [
    { path: '', component:  DashboardComponent, canActivate:[AuthGuard]},
    { path: 'dashboard1', component:  DashboardComponent, canActivate:[AuthGuard]},
    { path: 'dashboard2', component: Dashboard2Component, canActivate:[AuthGuard]},

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }