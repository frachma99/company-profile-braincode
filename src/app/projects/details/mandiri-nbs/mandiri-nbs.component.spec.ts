import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandiriNbsComponent } from './mandiri-nbs.component';

describe('MandiriNbsComponent', () => {
  let component: MandiriNbsComponent;
  let fixture: ComponentFixture<MandiriNbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandiriNbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandiriNbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
