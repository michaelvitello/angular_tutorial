import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuritiesComponent } from './securities/securities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecurityDetailComponent } from './security-detail/security-detail.component';


const routes: Routes = [
  { path: 'securities$', component: SecuritiesComponent },
  { path: '', redirectTo: '/securities$', pathMatch: 'full' },
  { path: 'detail/:symbol', component: SecurityDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
