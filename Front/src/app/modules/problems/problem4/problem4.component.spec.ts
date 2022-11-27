import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem4Component } from './problem4.component';

describe('Problem4Component', () => {
  let component: Problem4Component;
  let fixture: ComponentFixture<Problem4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Problem4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Problem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
