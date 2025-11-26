import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { BuscaComponent } from './busca.component';
import { provideHttpClient } from '@angular/common/http';
import { BannerComponent } from '../shared/banner/banner.component';
import { ContainerComponent } from '../shared/container/container.component';
import { FormBuscaComponent } from '../shared/form-busca/form-busca.component';
import { FiltrosComplementaresComponent } from './filtros-complementares/filtros-complementares.component';
import { CardComponent } from '../shared/card/card.component';
import { PassagemDestaqueComponent } from './passagem-destaque/passagem-destaque.component';
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
import { ParadasComponent } from './filtros-complementares/paradas/paradas.component';
import { CompanhiasComponent } from './filtros-complementares/companhias/companhias.component';
import { PrecosComponent } from './filtros-complementares/precos/precos.component';
import { MatNativeDateModule } from '@angular/material/core';

describe('BuscaComponent', () => {
  let component: BuscaComponent;
  let fixture: ComponentFixture<BuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonToggleGroup,
        MatButtonToggle,
        MatChip,
        MatIcon,
        MatFormField,
        MatLabel,
        MatDatepicker,
        MatDatepickerToggle,
        MatDatepickerModule,
        MatNativeDateModule,
      ],
      declarations: [
        BuscaComponent,
        BannerComponent,
        ContainerComponent,
        FormBuscaComponent,
        FiltrosComplementaresComponent,
        CardComponent,
        PassagemDestaqueComponent,
        DropdownUfComponent,
        ParadasComponent,
        CompanhiasComponent,
        PrecosComponent,
      ],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(BuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
