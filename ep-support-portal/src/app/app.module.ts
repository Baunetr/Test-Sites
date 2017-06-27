import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // NgModule Live here
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { UsersTableComponent } from '././tables/users-table/users-table.component';
import { CompanyComponent } from './pages/company/company.component';
import { ReportsTableComponent } from './tables/reports-table/reports-table.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    CompanyComponent,
    ReportsTableComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule, // import the Forms Module before binding with [(NgModule)]
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
