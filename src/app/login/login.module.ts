import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatButtonModule} from '@angular/material/button'; 
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  LoginComponent,
  ],
  
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers:[]

})
export class LoginModule { }
