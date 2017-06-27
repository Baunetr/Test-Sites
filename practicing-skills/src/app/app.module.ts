import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // NgModule Live here

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule // import the Forms Module before binding with [(NgModule)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
