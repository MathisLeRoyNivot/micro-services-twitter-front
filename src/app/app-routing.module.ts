import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AudioComponent } from "./audio/audio.component";

const routes: Routes = [
  { path: "audio", component: AudioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
