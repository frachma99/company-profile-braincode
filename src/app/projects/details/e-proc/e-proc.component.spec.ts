import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EProcComponent } from './e-proc.component';

describe('EProcComponent', () => {
  let component: EProcComponent;
  let fixture: ComponentFixture<EProcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EProcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EProcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
