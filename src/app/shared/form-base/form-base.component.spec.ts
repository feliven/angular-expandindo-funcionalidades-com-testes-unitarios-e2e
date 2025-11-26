import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { FormBaseComponent } from './form-base.component';
import { DropdownUfComponent } from '../../shared/dropdown-uf/dropdown-uf.component';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardTitle,
} from '@angular/material/card';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { provideHttpClient } from '@angular/common/http';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatIcon } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckbox } from '@angular/material/checkbox';

describe('FormBaseComponent', () => {
  let component: FormBaseComponent;
  let fixture: ComponentFixture<FormBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCard,
        MatCardTitle,
        MatCardContent,
        MatFormField,
        MatLabel,
        MatDatepickerToggle,
        MatDatepicker,
        MatRadioGroup,
        MatRadioButton,
        MatCardActions,
        MatIcon,
        MatAutocomplete,
        MatDatepickerModule,
        MatNativeDateModule,
        MatError,
        MatCheckbox,
      ],
      declarations: [
        FormBaseComponent,
        DropdownUfComponent,
        BannerComponent,
        FormBaseComponent,
        ContainerComponent,
      ],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(FormBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
