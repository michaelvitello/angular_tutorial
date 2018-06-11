import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TitleCaserComponent } from './title-caser/title-caser.component';
import { CustomTitleCaseComponent } from './custom-title-case/custom-title-case.component';
import { CustomTitleCasePipe } from './custom-title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleCaserComponent,
    CustomTitleCaseComponent,
    CustomTitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
