import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  
  readonly USER_INFOS_URL = 'http://localhost:3000/api/twitter/user-infos/galm_ms';

  userInfos: any; //Observable<any>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.USER_INFOS_URL).subscribe(data => {
      this.userInfos = data
      return this.userInfos;
    });
  }

}
