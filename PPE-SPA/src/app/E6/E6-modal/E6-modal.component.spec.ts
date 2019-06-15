/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { E6ModalComponent } from './E6-modal.component';

describe('E6ModalComponent', () => {
  let component: E6ModalComponent;
  let fixture: ComponentFixture<E6ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E6ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E6ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
