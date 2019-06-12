/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JurySelectComponent } from './jury-select.component';

describe('JurySelectComponent', () => {
  let component: JurySelectComponent;
  let fixture: ComponentFixture<JurySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurySelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JurySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
