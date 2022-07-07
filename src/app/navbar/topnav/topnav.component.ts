import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  @Output() menuState = new EventEmitter();
  showFiller = false;
  constructor() { }

  opened!: boolean;
  showMenu = false;
  showSearch = false;

  
  toggleMenu() {
      this.showMenu = !this.showMenu;
      this.menuState.emit(this.showMenu);
   }

   toggleSearch() {
    this.showSearch = !this.showSearch;
 }

  ngOnInit() {
  }
}
