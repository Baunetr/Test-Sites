import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent } from './pages/users/user-detail/user-detail.component';
import { ReportDetailComponent } from './pages/reports/report-detail/report-detail.component';
import { CompanyDetailComponent } from './pages/companies/company-detail/company-detail.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'report-detail', component: ReportDetailComponent },
  { path: 'company-detail', component: CompanyDetailComponent },
  { path: '', redirectTo: '/company-detail', pathMatch: 'full'},
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
