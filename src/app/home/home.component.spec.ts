import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { HomeComponent } from './home.component';
import { provideHttpClient } from '@angular/common/http';
import { BannerComponent } from '../shared/banner/banner.component';
import { ContainerComponent } from '../shared/container/container.component';
import { FormBuscaComponent } from '../shared/form-busca/form-busca.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { DepoimentosComponent } from './depoimentos/depoimentos.component';
import { CardComponent } from '../shared/card/card.component';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatChip } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';
import { DropdownUfComponent } from '../shared/dropdown-uf/dropdown-uf.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatButtonToggleGroup,
        MatButtonToggle,
        MatChip,
        MatIcon,
        MatFormField,
        MatLabel,
        MatDatepickerToggle,
        MatDatepicker,
        MatDatepickerModule,
        MatNativeDateModule,
        MatAutocomplete,
      ],
      declarations: [
        HomeComponent,
        BannerComponent,
        ContainerComponent,
        FormBuscaComponent,
        PromocoesComponent,
        DepoimentosComponent,
        CardComponent,
        DropdownUfComponent,
      ],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
