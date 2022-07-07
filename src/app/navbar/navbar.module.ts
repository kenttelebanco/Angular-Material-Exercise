import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from '../app.component';
import { NavbarRoutingModule } from './navbar.routing.module';
import { ExpansionPanelComponent } from './sidenav/components/expansion-panel/expansion-panel.component';
import { ProfileMenuComponent } from './sidenav/components/profile-menu/profile-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuIconsComponent } from './topnav/components/menu-icons/menu-icons.component';
import { TopnavComponent } from './topnav/topnav.component';



@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,
    ProfileMenuComponent,
    ExpansionPanelComponent,
    MenuIconsComponent 
  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    MatExpansionModule,
    NavbarRoutingModule,
  ],
  exports: [],
  providers:[]

})
export class NavBarModule { }
