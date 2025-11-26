import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { DepoimentosComponent } from './depoimentos.component';
import { provideHttpClient } from '@angular/common/http';
import { MatRadioGroup } from '@angular/material/radio';
import { MatIcon } from '@angular/material/icon';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { BannerComponent } from '../../shared/banner/banner.component';
import { FormBaseComponent } from '../../shared/form-base/form-base.component';

describe('DepoimentosComponent', () => {
  let component: DepoimentosComponent;
  let fixture: ComponentFixture<DepoimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatRadioGroup, MatIcon, MatAutocomplete],
      declarations: [DepoimentosComponent, BannerComponent, FormBaseComponent],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(DepoimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
