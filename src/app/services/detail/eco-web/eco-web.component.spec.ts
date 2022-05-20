import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoWebComponent } from './eco-web.component';

describe('EcoWebComponent', () => {
  let component: EcoWebComponent;
  let fixture: ComponentFixture<EcoWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
