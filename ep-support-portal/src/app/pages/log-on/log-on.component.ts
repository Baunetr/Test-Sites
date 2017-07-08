import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.css']
})
export class LogOnComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  gotoDashboard(): void {
    this.router.navigate(['/support-dashboard']);
  }
}
