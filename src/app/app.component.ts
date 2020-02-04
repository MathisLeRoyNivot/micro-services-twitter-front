import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-services-twitter-front';
  public currUser:Number;
  newUserSelect(){
    this.currUser = 1;
  }
}
