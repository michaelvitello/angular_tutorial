import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { SecuritiesComponent } from './securities/securities.component';
import { SecurityDetailComponent } from './security-detail/security-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SecuritiesComponent,
    DashboardComponent,
    SecurityDetailComponent
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
