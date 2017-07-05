import { Injectable } from '@angular/core';

import { Report } from './reports-table/report';
import { REPORTS } from './mock-reports';

@Injectable()
export class ReportService {
  getReports(): Promise<Report[]> {
    return Promise.resolve(REPORTS);
  }

  getReport(id: number): Promise<Report> {
    return this.getReports()
      .then(reports => reports.find(report => report.erNumber === id));
  }
}
