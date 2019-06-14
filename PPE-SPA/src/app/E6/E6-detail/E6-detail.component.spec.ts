/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { E6DetailComponent } from './E6-detail.component';

describe('E6DetailComponent', () => {
  let component: E6DetailComponent;
  let fixture: ComponentFixture<E6DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E6DetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E6DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
