/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { E6ListComponent } from './E6-list.component';

describe('E6ListComponent', () => {
  let component: E6ListComponent;
  let fixture: ComponentFixture<E6ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E6ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E6ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
