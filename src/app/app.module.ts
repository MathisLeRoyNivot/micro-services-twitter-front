import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerLeftComponent } from './container-left/container-left.component';
import { MicroButtonComponent } from './micro-button/micro-button.component';
import { AudioComponent } from './audio/audio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { TextFieldComponent } from './text-field/text-field.component';
// import { SpeechRecognition } from "nativescript-speech-recognition";

@NgModule({
  declarations: [
    AppComponent,
    ContainerLeftComponent,
    MicroButtonComponent,
    AudioComponent,
    NavbarComponent,
    SideNavbarComponent,
    UserInfoComponent,
    TextFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
