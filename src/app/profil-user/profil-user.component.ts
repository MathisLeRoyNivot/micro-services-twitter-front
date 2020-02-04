import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.scss']
})
export class ProfilUserComponent implements OnInit {
  public people: Object = {
    "nom":"SardocheLOL",
    "code":"Sardoche",
    "rating":5,
    "bio":"lorem Ipsum",
    "dateInscription":"0/0/2000",
    "dateNaissance":"0/0/2000",
    "lieu":"Nantes",
    "lien":"https://twitter.com/Sardoche_Lol"
  };
  public five: Array<Number> = [0,1,2,3,4];
  constructor() { }

  ngOnInit() {
  }

}
