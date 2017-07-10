import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogOnComponent } from './pages/log-on/log-on.component';
import { SupportDashboardComponent } from './pages/companies/support-dashboard/support-dashboard.component';
import { UserDetailComponent } from './pages/users/user-detail/user-detail.component';
import { ReportDetailComponent } from './pages/reports/report-detail/report-detail.component';
import { CompanyDetailComponent } from './pages/companies/company-detail/company-detail.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'log-on', component: LogOnComponent },
  { path: 'support-dashboard', component: SupportDashboardComponent },
  { path: 'company-detail/:id', component: CompanyDetailComponent },
  { path: 'user-detail/:id', component: UserDetailComponent },
  { path: 'report-detail/:erNumber', component: ReportDetailComponent },
  { path: '', redirectTo: '/support-dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
