import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { PrecosComponent } from './precos.component';
import { provideHttpClient } from '@angular/common/http';
import { LabelComponent } from '../label/label.component';
import { MatSlider } from '@angular/material/slider';

describe('PrecosComponent', () => {
  let component: PrecosComponent;
  let fixture: ComponentFixture<PrecosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSlider],
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
