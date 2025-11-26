import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { FiltrosComplementaresComponent } from './filtros-complementares.component';
import { provideHttpClient } from '@angular/common/http';
import { ParadasComponent } from './paradas/paradas.component';
import { CompanhiasComponent } from './companhias/companhias.component';
import { PrecosComponent } from './precos/precos.component';
import { CardComponent } from '../../shared/card/card.component';
import { MatIcon } from '@angular/material/icon';
import { LabelComponent } from './label/label.component';
import { MatSlider } from '@angular/material/slider';
import { MatCheckbox } from '@angular/material/checkbox';

describe('FiltrosComplementaresComponent', () => {
  let component: FiltrosComplementaresComponent;
  let fixture: ComponentFixture<FiltrosComplementaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatIcon, MatSlider, MatCheckbox],
      declarations: [
        FiltrosComplementaresComponent,
        ParadasComponent,
        CompanhiasComponent,
        PrecosComponent,
        CardComponent,
        LabelComponent,
      ],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(FiltrosComplementaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
