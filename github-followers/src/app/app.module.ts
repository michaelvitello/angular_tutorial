import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
