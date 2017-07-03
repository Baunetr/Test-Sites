import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // NgModule Live here
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UsersTableComponent } from './pages/users/users-table/users-table.component';
import { CompanyDetailComponent } from './pages/companies/company-detail/company-detail.component';
import { ReportsTableComponent } from './pages/reports/reports-table/reports-table.component';
import { PageNotFoundComponent } from './not-found.component';
import { UserDetailComponent } from './pages/users/user-detail/user-detail.component';
import { ReportDetailComponent } from './pages/reports/report-detail/report-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    CompanyDetailComponent,
    ReportsTableComponent,
    PageNotFoundComponent,
    UserDetailComponent,
    ReportDetailComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule, // import the Forms Module before binding with [(NgModule)]
    DataTablesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
