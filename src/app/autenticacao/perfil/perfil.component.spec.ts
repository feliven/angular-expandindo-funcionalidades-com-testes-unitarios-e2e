import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { PerfilComponent } from './perfil.component';
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
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { MatIcon } from '@angular/material/icon';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatCheckbox } from '@angular/material/checkbox';
import { DropdownUfComponent } from '../../shared/dropdown-uf/dropdown-uf.component';
import { MatDivider } from '@angular/material/divider';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCard,
        MatCardTitle,
        MatCardContent,
        MatDivider,
        MatFormField,
        MatLabel,
        MatError,
        MatDatepickerToggle,
        MatDatepicker,
        MatCardActions,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioButton,
        MatRadioGroup,
        MatIcon,
        MatAutocomplete,
        MatCheckbox,
      ],
      declarations: [
        PerfilComponent,
        BannerComponent,
        FormBaseComponent,
        ContainerComponent,
        DropdownUfComponent,
      ],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
