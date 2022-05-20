import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandiriKpiComponent } from './mandiri-kpi.component';

describe('MandiriKpiComponent', () => {
  let component: MandiriKpiComponent;
  let fixture: ComponentFixture<MandiriKpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandiriKpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandiriKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
