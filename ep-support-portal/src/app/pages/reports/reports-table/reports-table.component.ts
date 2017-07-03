import { Component, OnInit } from '@angular/core';

import { Report } from './report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.css'],
  providers: [ReportService]
})
export class ReportsTableComponent implements OnInit {
  reports: Report[];

  constructor(private reportService: ReportService) { }

  getReports(): void {
    this.reportService.getReports().then(reports => this.reports = reports);
  }

  ngOnInit(): void {
    this.getReports();
  }
}
