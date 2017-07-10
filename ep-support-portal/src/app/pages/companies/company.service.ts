import { Injectable } from '@angular/core';

import { Company } from './companies-table/company';
import { COMPANIES } from './mock-companies';

@Injectable()
export class CompanyService {
  getCompanies(): Promise<Company[]> {
    return Promise.resolve(COMPANIES);
  }

  getCompany(id: number): Promise<Company> {
    return this.getCompanies()
      .then(companies => companies.find(company => company.id === id));
  }
}
