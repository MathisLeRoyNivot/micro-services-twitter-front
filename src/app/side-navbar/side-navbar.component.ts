import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  public currUser: Number;

  profileSelect() {
    this.currUser = 1;
    console.log(this.currUser);
    return this.currUser;
  }

  textFieldSelect() {
    this.currUser = 0;
    console.log(this.currUser);
    return this.currUser;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
