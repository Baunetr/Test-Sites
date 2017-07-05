import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Report } from '../reports-table/report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css'],
  providers: [ ReportService ]
})
export class ReportDetailComponent implements OnInit {
  report: Report;

  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getReport(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.reportService.getReport(id).then(report => this.report = report);
  }

  ngOnInit(): void {
    this.getReport();
  }

}
