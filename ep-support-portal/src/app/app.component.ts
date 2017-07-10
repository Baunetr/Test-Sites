import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { UsersTableComponent } from './tables/users-table/users-table.component';
// import { ReportsTableComponent } from './tables/reports-table/reports-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Partner Portal';

  constructor(
    private router: Router
  ) { }
}
