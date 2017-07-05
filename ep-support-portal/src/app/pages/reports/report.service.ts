import { Injectable } from '@angular/core';

import { Report } from './reports-table/report';
import { REPORTS } from './mock-reports';

@Injectable()
export class ReportService {
  getReports(): Promise<Report[]> {
    return Promise.resolve(REPORTS);
  }

  getReport(id:number): Promise<Report> {
    let aReport: Report;
    let i = 0, len = REPORTS.length;
    for (; i<len; i++) {
      if (REPORTS[i].erNumber == id) {
        aReport = REPORTS[i];
      }
    }
    return Promise.resolve(aReport);
  }
}
