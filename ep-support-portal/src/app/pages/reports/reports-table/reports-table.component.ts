import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

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
  selectedReport: Report;

  constructor(
    private router: Router,
    private reportService: ReportService) { }

  onSelect(report: Report): void {
    this.selectedReport = report;
  }

  getReports(): void {
    this.reportService.getReports().then(reports => this.reports = reports);
  }

  ngOnInit(): void {
    this.getReports();
  }

  gotoDetail(): void {
    this.router.navigate(['/report-detail', this.selectedReport.erNumber]);
  }

}
