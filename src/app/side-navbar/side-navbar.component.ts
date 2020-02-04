import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  @Output() pageChange = new EventEmitter;

 ratingSelect() {
    this.pageChange.next(2);
  }

  textFieldSelect() {
    this.pageChange.next(1);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
