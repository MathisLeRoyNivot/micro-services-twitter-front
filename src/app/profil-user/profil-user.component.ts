import { Component, OnInit, Input } from "@angular/core";
import { Rank } from "../../model/Rank";
import { User } from "../../model/User";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-profil-user",
  templateUrl: "./profil-user.component.html",
  styleUrls: ["./profil-user.component.scss"]
})
export class ProfilUserComponent implements OnInit {

  readonly GETUSER_URL = "http://localhost:3000/api/twitter/user-infos/";
  readonly GETRANK = "http://localhost:8002/ratings";
  readonly POSTRANK = "http://localhost:8002/rating";
  public userslec: User;

  @Input() nameUser: String;
  public noteUser: number;
  public five: Array<Number> = [0, 1, 2, 3, 4];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.GETUSER_URL+this.nameUser).subscribe(data => {
      this.userslec = data;
      console.log(this.GETUSER_URL + "-->" + data);

      this.httpClient
        .get(this.GETRANK)
        .toPromise()
        .then((data: Array<object>) => {
          let myarray: Array<Rank> = data.filter((rank: Rank) => {
            rank.twitter_id == this.userslec.id;
          });

          let moyenne: number;
          for (let i = 0; i < myarray.length; i++) {
            let ele: Rank  = myarray[i];
            moyenne += ele.note;  
          }
          moyenne = moyenne / myarray.length;
          this.noteUser = Math.round(moyenne);
        });
    });
  }

  addStar(index) {
    this.noteUser = index + 1
    const noteParam = {
      twitter_id: "1216999697061163008",
      rated_twitter_id: this.userslec.id_str,
      note: this.noteUser.toString()
    }
    console.log(noteParam);

    this.httpClient.post(this.POSTRANK, noteParam).toPromise().then((res) => {
      alert('Note ajouté')
    }).catch(err => {
      throw err;
    });
  }
}
