import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-text-field",
  templateUrl: "./text-field.component.html",
  styleUrls: ["./text-field.component.scss"]
})
export class TextFieldComponent implements OnInit {
  public http: HttpClient;
  constructor(private httpR: HttpClient) {
    this.http = httpR;
  }

  ngOnInit() {}
  click(txt) {
    console.log(txt.value);
    if (txt.value) {
    this.http
      .post('http://localhost:3000/api/twitter/status' , {
        status:txt.value
      }).toPromise().then((res)=>{
        alert('Vous venez de tweeter : ' + txt.value)
    txt.value=""
      }).catch((err)=>{
        alert(err.message)
      });
    
    }
    
    
  }
  
  enter(btn) {
    btn.classList.add("animated", "heartBeat");
  }
  leave(btn) {
    btn.classList.remove("animated", "heartBeat");
  }
}
