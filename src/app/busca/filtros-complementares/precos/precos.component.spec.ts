import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { PrecosComponent } from './precos.component';
import { provideHttpClient } from '@angular/common/http';
import { LabelComponent } from '../label/label.component';
import {
  MatSlider,
  MatSliderRangeThumb,
  MatSliderThumb,
} from '@angular/material/slider';
import { ReactiveFormsModule } from '@angular/forms';

describe('PrecosComponent', () => {
  let component: PrecosComponent;
  let fixture: ComponentFixture<PrecosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatSlider,
        MatSliderThumb,
        MatSliderRangeThumb,
      ],
      declarations: [PrecosComponent, LabelComponent],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(PrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
