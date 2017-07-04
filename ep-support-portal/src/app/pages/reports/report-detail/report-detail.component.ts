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
  report: Report[];

  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getReport(): Report {
    return Report[5];
  }

  ngOnInit() {
    this.getReport = return this.reportService.getReport[5];
  }

}
