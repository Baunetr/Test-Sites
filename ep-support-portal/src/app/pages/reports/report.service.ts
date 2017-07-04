import { Injectable } from '@angular/core';

import { Report } from './reports-table/report';
import { REPORTS } from './mock-reports';


@Injectable()
export class ReportService {
  getReports(): Promise<Report[]> {
    return Promise.resolve(REPORTS);
  }

  getReport(): Promise<Report[]> {
    return Promise.resolve(REPORTS);
  }
}
