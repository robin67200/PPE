/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CritereComponent } from './critere.component';

describe('CritereComponent', () => {
  let component: CritereComponent;
  let fixture: ComponentFixture<CritereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
