import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteSolComponent } from './ente-sol.component';

describe('EnteSolComponent', () => {
  let component: EnteSolComponent;
  let fixture: ComponentFixture<EnteSolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteSolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
