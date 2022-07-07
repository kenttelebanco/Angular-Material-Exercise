import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnChanges  {
  @Input() subMenuState!: boolean;
  constructor() { }
  opened!: boolean;
  showMenu = true;
  panelOpenState = true;

  ngOnInit() {
  }

  ngOnChanges(){
    this.showMenu = this.subMenuState;
  }

}
