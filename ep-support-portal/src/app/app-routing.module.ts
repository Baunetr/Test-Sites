import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent } from './pages/users/user-detail/user-detail.component';
import { ReportDetailComponent } from './pages/reports/report-detail/report-detail.component'
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'report-detail', component: ReportDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
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
