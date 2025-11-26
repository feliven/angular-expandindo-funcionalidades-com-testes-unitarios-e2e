import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { PassagemComponent } from './passagem.component';
import { Passagem } from '../../core/types/type';

describe('PassagemComponent', () => {
  let component: PassagemComponent;
  let fixture: ComponentFixture<PassagemComponent>;

  const mockPassagem: Passagem = {
    origem: { nome: 'São Paulo', sigla: 'GRU', id: 1 },
    destino: { nome: 'Rio de Janeiro', sigla: 'GIG', id: 2 },
    dataIda: new Date('2024-01-15'),
    dataVolta: new Date('2024-01-20'),
    total: 500,
    tipo: 'ida-volta',
    precoIda: 200,
    precoVolta: 300,
    taxaEmbarque: 20,
    conexoes: 1,
    tempoVoo: 3,
    companhia: { id: 'CEU', nome: 'Céu' },
    orcamento: [
      {
        descricao: 'Passagem',
        preco: 400,
        taxaEmbarque: 50,
        total: 450,
      },
    ],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassagemComponent],
    });
    fixture = TestBed.createComponent(PassagemComponent);
    component = fixture.componentInstance;
    component.passagem = mockPassagem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "Ida e volta" when dataVolta is defined', () => {
    expect(component.textoIdaVolta).toBe('Ida e volta');
  });

  it('should return "Somente ida" when dataVolta is undefined', () => {
    component.passagem = {
      ...mockPassagem,
      dataVolta: undefined as unknown as Date,
    };
    expect(component.textoIdaVolta).toBe('Somente ida');
  });

  it('should display passagem data correctly', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.ida-volta').textContent.trim()).toBe(
      'Ida e volta'
    );
  });
});
