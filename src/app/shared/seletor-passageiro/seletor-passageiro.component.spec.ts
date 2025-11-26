import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { SeletorPassageiroComponent } from './seletor-passageiro.component';
import { BotaoControleComponent } from '../../shared/botao-controle/botao-controle.component';
import {
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';

describe('SeletorPassageiroComponent', () => {
  let component: SeletorPassageiroComponent;
  let fixture: ComponentFixture<SeletorPassageiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatFormField, MatFormFieldControl],
      declarations: [SeletorPassageiroComponent, BotaoControleComponent],
    });
    fixture = TestBed.createComponent(SeletorPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
