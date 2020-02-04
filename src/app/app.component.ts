import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-services-twitter-front';
  public currUser:Number;
  public page:Number=1;
  
  appContainerLeft(evnt){
    this.currUser = evnt;
  }

  pageValueChange(eve) {
    this.page= eve
  }
}
