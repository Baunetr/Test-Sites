import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersTableComponent } from '././tables/users-table/users-table.component';
import { ReportsTableComponent } from './tables/reports-table/reports-table.component';
import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersTableComponent },
  { path: 'reports', component: ReportsTableComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
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
