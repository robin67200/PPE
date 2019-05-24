/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridModalsComponent } from './grid-modals.component';

describe('GridModalsComponent', () => {
  let component: GridModalsComponent;
  let fixture: ComponentFixture<GridModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
