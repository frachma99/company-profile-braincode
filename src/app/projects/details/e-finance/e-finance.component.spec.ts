import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EFinanceComponent } from './e-finance.component';

describe('EFinanceComponent', () => {
  let component: EFinanceComponent;
  let fixture: ComponentFixture<EFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
