import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from './auth/auth.service'
import { AuthGuard } from './auth/auth.guard'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routes } from './app-routing.module';
import { NavBarModule } from './navbar/navbar.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavBarModule,
    DashboardModule,
    LoginModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
