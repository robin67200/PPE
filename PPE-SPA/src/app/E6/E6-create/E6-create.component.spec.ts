/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { E6CreateComponent } from './E6-create.component';

describe('E6CreateComponent', () => {
  let component: E6CreateComponent;
  let fixture: ComponentFixture<E6CreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E6CreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E6CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
