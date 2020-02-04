import { Component, OnInit, Attribute } from "@angular/core";
// import {
//   SpeechRecognition,
//   SpeechRecognitionTranscription,
//   SpeechRecognitionOptions
// } from "nativescript-speech-recognition";
@Component({
  selector: "app-micro-button",
  templateUrl: "./micro-button.component.html",
  styleUrls: ["./micro-button.component.scss"]
})
export class MicroButtonComponent implements OnInit {
  public size: String;
  public style: String;
  public src: String;
  public clickon: Boolean;
  public element: HTMLElement;
  // public options: SpeechRecognitionOptions;

  constructor(
    @Attribute("size") size: string
    // private speech: SpeechRecognition
  ) {
    if (size) {
      this.size = size;
    } else {
      this.size = "4vw";
    }
    this.src = "micB.png";
    this.clickon = false;
    this.element = document.getElementById("buttonMic") as HTMLElement;
    // this.options = {
    //   locale:'fr-FR',
    //   onResult:(transcription:SpeechRecognitionTranscription)=>{
    //     console.log( `${transcription.text}`)
    //     console.log( `${transcription.finished}`);
    //   }
    // }
  }
  ngOnInit() {}

  applyStyles() {
    return { width: this.size, height: this.size, "border-radius": this.size };
  }

  enter() {
    if (!this.clickon) {
      this.src = "micW.png";
    }
  }
  leave() {
    if (!this.clickon) {
      this.src = "micB.png";
    }
  }

  click(ctx) {
    if (this.clickon) {
      this.clickon = false;
      this.src = "micB.png";
      ctx.blur();
      // this.speech.stopListening().then(()=>{
      //   console.log("stopped listening");
      // },(err)=>{console.log(err);
      // })
    } else {
      this.clickon = true;
      this.src = "micW.png";
      //   this.speech.available().then(result => {
      //     result
      //       ? this.startListening()
      //       : alert("speech recignition is not available");
      //   });
      // }
    }
  }
  startListening() {
    // this.speech.startListening(this.options).then(()=>{
    //   console.log("started listening");
    // },error=>{
    //   console.log(error);
    // });
  }
}
