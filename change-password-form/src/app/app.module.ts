import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangePasswordFComponent } from './change-password-f/change-password-f.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordFComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
