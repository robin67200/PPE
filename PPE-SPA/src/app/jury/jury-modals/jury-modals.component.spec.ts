/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JuryModalsComponent } from './jury-modals.component';

describe('JuryModalsComponent', () => {
  let component: JuryModalsComponent;
  let fixture: ComponentFixture<JuryModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuryModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
