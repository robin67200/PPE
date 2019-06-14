/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { E6EditComponent } from './E6-edit.component';

describe('E6EditComponent', () => {
  let component: E6EditComponent;
  let fixture: ComponentFixture<E6EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E6EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E6EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
