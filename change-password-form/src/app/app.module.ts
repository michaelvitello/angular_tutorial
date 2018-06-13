import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChangePasswordFComponent } from './change-password-f/change-password-f.component';
import { PasswordValidators } from './change-password-f/./password.validators';

@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordFComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
