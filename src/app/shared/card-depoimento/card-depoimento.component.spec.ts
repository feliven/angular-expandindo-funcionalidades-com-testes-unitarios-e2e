import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { CardDepoimentoComponent } from './card-depoimento.component';
import { Depoimento } from '../../core/types/type';
import { MatCardModule } from '@angular/material/card';

describe('CardDepoimentoComponent', () => {
  let component: CardDepoimentoComponent;
  let fixture: ComponentFixture<CardDepoimentoComponent>;
  let compiled: HTMLElement;

  const mockDepoimento: Depoimento = {
    texto: 'Este é um depoimento de teste muito interessante',
    autor: 'João Silva',
    id: 1,
    avatar: '',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDepoimentoComponent],
      imports: [MatCardModule],
    });
    fixture = TestBed.createComponent(CardDepoimentoComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have depoimento input property', () => {
    expect(component.depoimento).toBeUndefined();
    component.depoimento = mockDepoimento;
    expect(component.depoimento).toBe(mockDepoimento);
  });

  it('should render mat-card element', () => {
    component.depoimento = mockDepoimento;
    fixture.detectChanges();

    const matCard = compiled.querySelector('mat-card');
    expect(matCard).toBeTruthy();
    expect(matCard?.classList.contains('depoimento')).toBe(true);
  });

  it('should render mat-card-content element', () => {
    component.depoimento = mockDepoimento;
    fixture.detectChanges();

    const matCardContent = compiled.querySelector('mat-card-content');
    expect(matCardContent).toBeTruthy();
  });

  it('should render avatar image with correct attributes', () => {
    component.depoimento = mockDepoimento;
    fixture.detectChanges();

    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('assets/imagens/avatar3.png');
    expect(img?.getAttribute('alt')).toBe(
      'Avatar da pessoa autora do depoimento'
    );
  });

  it('should render depoimento texto in the first li element', () => {
    component.depoimento = mockDepoimento;
    fixture.detectChanges();

    const liElements = compiled.querySelectorAll('li');
    expect(liElements.length).toBeGreaterThanOrEqual(2);
    expect(liElements[0].textContent?.trim()).toBe(mockDepoimento.texto);
  });

  it('should render depoimento autor in strong tag within second li element', () => {
    component.depoimento = mockDepoimento;
    fixture.detectChanges();

    const liElements = compiled.querySelectorAll('li');
    const strongElement = liElements[1].querySelector('strong');
    expect(strongElement).toBeTruthy();
    expect(strongElement?.textContent?.trim()).toBe(mockDepoimento.autor);
  });

  it('should render ul element with list items', () => {
    component.depoimento = mockDepoimento;
    fixture.detectChanges();

    const ul = compiled.querySelector('ul');
    expect(ul).toBeTruthy();

    const liElements = ul?.querySelectorAll('li');
    expect(liElements?.length).toBe(2);
  });

  it('should update view when depoimento input changes', () => {
    component.depoimento = mockDepoimento;
    fixture.detectChanges();

    let liElements = compiled.querySelectorAll('li');
    expect(liElements[0].textContent?.trim()).toBe(mockDepoimento.texto);

    const newDepoimento: Depoimento = {
      texto: 'Novo texto de depoimento',
      autor: 'Maria Santos',
      id: 8,
      avatar: '',
    };

    component.depoimento = newDepoimento;
    fixture.detectChanges();

    liElements = compiled.querySelectorAll('li');
    expect(liElements[0].textContent?.trim()).toBe(newDepoimento.texto);
    expect(liElements[1].querySelector('strong')?.textContent?.trim()).toBe(
      newDepoimento.autor
    );
  });

  it('should have correct DOM structure', () => {
    component.depoimento = mockDepoimento;
    fixture.detectChanges();

    const matCard = compiled.querySelector('mat-card');
    const matCardContent = matCard?.querySelector('mat-card-content');
    const img = matCardContent?.querySelector('img');
    const ul = matCardContent?.querySelector('ul');

    expect(matCard).toBeTruthy();
    expect(matCardContent).toBeTruthy();
    expect(img).toBeTruthy();
    expect(ul).toBeTruthy();
  });
});
