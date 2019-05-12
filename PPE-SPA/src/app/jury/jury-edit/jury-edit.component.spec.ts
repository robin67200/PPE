/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JuryEditComponent } from './jury-edit.component';

describe('JuryEditComponent', () => {
  let component: JuryEditComponent;
  let fixture: ComponentFixture<JuryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
