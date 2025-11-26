import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { ParadasComponent } from './paradas.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatSlider } from '@angular/material/slider';
import { LabelComponent } from '../label/label.component';

describe('ParadasComponent', () => {
  let component: ParadasComponent;
  let fixture: ComponentFixture<ParadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCheckbox, MatSlider],
      declarations: [ParadasComponent, LabelComponent],
    });
    fixture = TestBed.createComponent(ParadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
