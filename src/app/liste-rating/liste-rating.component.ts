import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserUI } from 'src/model/User';
import { Rank } from 'src/model/Rank';
@Component({
  selector: 'app-liste-rating',
  templateUrl: './liste-rating.component.html',
  styleUrls: ['./liste-rating.component.scss']
})
export class ListeRatingComponent implements OnInit {

  readonly GETRANK = 'http://localhost:3000/api/twitter/timeline'
  readonly GETUSER_URL = "http://localhost:3000/api/twitter/user-infos-id/";

  timelines: Array<UserUI>;
   @Output() goRank = new EventEmitter();
   public five: Array<Number> = [0, 1, 2, 3, 4];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.GETRANK).subscribe((data:Array<Rank>) => {
      for (let i = 0; i < data.length; i++) {
        const element:Rank = data[i];
        this.httpClient.get(this.GETUSER_URL+element.twitter_id).subscribe((data:UserUI) => {
          data.noteUI= element.note;
          this.timelines.push(data);
        });
      }
    });
  }

}
