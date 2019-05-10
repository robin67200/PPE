/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentModalsComponent } from './student-modals.component';

describe('StudentModalsComponent', () => {
  let component: StudentModalsComponent;
  let fixture: ComponentFixture<StudentModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
