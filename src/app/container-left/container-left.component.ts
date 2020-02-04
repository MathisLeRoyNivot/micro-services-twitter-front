import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container-left',
  templateUrl: './container-left.component.html',
  styleUrls: ['./container-left.component.scss']
})
export class ContainerLeftComponent implements OnInit {

  readonly TIMELINE_URL = 'http://localhost:3000/api/twitter/timelines'

  public timelines:Object;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.TIMELINE_URL).subscribe(data => {
      this.timelines = data;
      return this.timelines;
    });
  }

}
