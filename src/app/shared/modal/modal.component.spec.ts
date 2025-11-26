import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { ModalComponent } from './modal.component';
import { SeletorPassageiroComponent } from '../../shared/seletor-passageiro/seletor-passageiro.component';
import { MatChipListbox, MatChipOption } from '@angular/material/chips';
import { BotaoControleComponent } from '../../shared/botao-controle/botao-controle.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatChipListbox, MatChipOption],
      declarations: [
        ModalComponent,
        SeletorPassageiroComponent,
        BotaoControleComponent,
      ],
    });
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
