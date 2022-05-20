import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EOperationComponent } from './e-operation.component';

describe('EOperationComponent', () => {
  let component: EOperationComponent;
  let fixture: ComponentFixture<EOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
