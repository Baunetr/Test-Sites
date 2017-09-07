import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportDashboardComponent } from './support-dashboard.component';

describe('SupportDashboardComponent', () => {
  let component: SupportDashboardComponent;
  let fixture: ComponentFixture<SupportDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});