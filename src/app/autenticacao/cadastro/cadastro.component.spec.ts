import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { CadastroComponent } from './cadastro.component';
import { provideHttpClient } from '@angular/common/http';
import { BannerComponent } from '../../shared/banner/banner.component';
import { FormBaseComponent } from '../../shared/form-base/form-base.component';
import { ContainerComponent } from '../../shared/container/container.component';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardTitle,
} from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { DropdownUfComponent } from '../../shared/dropdown-uf/dropdown-uf.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatCard,
        MatCardActions,
        MatError,
        MatCardTitle,
        MatCardContent,
        MatFormField,
        MatAutocomplete,
        MatIcon,
        MatLabel,
        MatDatepicker,
        MatDatepickerToggle,
        MatRadioGroup,
        MatRadioButton,
        MatCheckbox,
        MatDatepickerModule,
        MatNativeDateModule,
      ],
      declarations: [
        CadastroComponent,
        BannerComponent,
        FormBaseComponent,
        ContainerComponent,
        DropdownUfComponent,
      ],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
