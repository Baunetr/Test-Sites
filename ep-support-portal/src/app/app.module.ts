import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModule Live here
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { TableComponent } from '././table/table.component';
import { CompanyComponent } from './pages/company/company.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the Forms Module before binding with [(NgModule)]
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
