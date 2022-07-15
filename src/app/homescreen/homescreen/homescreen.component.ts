import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  subMenuState:boolean = false;
  routerClicked(evnt: boolean){
    this.subMenuState = evnt;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
