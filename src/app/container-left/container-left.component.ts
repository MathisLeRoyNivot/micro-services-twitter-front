import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-container-left',
  templateUrl: './container-left.component.html',
  styleUrls: ['./container-left.component.scss']
})
export class ContainerLeftComponent implements OnInit {

  readonly TIMELINE_URL = 'http://localhost:3000/api/twitter/timeline'

  timelines: any;
   @Output() goRank = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.TIMELINE_URL).subscribe(data => {
      this.timelines = data;
      console.log(data);
      return this.timelines;
    });
    
    
  }

}
