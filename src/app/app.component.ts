import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angluar_material01';

  subMenuState:boolean = false;
  routerClicked(evnt: boolean){
    this.subMenuState = evnt;
  }
}
