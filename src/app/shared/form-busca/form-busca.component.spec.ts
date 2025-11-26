import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { FormBuscaComponent } from './form-busca.component';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import {
  MatDatepicker,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { DropdownUfComponent } from '../../shared/dropdown-uf/dropdown-uf.component';
import { MatIcon } from '@angular/material/icon';
import { MatChip } from '@angular/material/chips';
import { provideHttpClient } from '@angular/common/http';
import { CardComponent } from '../../shared/card/card.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormBuscaComponent', () => {
  let component: FormBuscaComponent;
  let fixture: ComponentFixture<FormBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatButtonToggle,
        MatDatepicker,
        MatDatepickerToggle,
        MatLabel,
        MatFormField,
        MatIcon,
        MatChip,
        MatButtonToggleGroup,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocomplete,
      ],
      declarations: [FormBuscaComponent, DropdownUfComponent, CardComponent],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(FormBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
