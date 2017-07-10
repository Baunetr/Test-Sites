import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Company } from './company';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-companies-table',
  templateUrl: './companies-table.component.html',
  styleUrls: ['./companies-table.component.css'],
  providers: [CompanyService]
})
export class CompaniesTableComponent implements OnInit {
  companies: Company[];
  selectedCompany: Company;

  constructor(
    private router: Router,
    private companyService: CompanyService) { }

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }

  getCompanies(): void {
    this.companyService.getCompanies().then(companies => this.companies = companies);
  }

  ngOnInit() {
    this.getCompanies();
  }

  gotoDetail(): void {
    this.router.navigate(['company-detail', this.selectedCompany.id]);
  }
}
