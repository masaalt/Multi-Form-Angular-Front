import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMosqueComponent } from './report-mosque.component';

describe('ReportMosqueComponent', () => {
  let component: ReportMosqueComponent;
  let fixture: ComponentFixture<ReportMosqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMosqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
