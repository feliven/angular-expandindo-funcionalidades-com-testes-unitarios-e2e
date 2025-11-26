import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { BotaoControleComponent } from './botao-controle.component';

describe('BotaoControleComponent', () => {
  let component: BotaoControleComponent;
  let fixture: ComponentFixture<BotaoControleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoControleComponent],
    });
    fixture = TestBed.createComponent(BotaoControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // operacao = 'incrementar';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render without errors', () => {
    expect(() => {
      fixture.detectChanges();
    }).not.toThrow();
  });

  it('should initialize component properties', () => {
    expect(component instanceof BotaoControleComponent).toBe(true);
  });

  // tests for default src and alt

  it('should initialize with operacao = incrementar', () => {
    expect(component.operacao).toEqual('incrementar');
  });

  it('should render with default src and alt ', () => {
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('assets/icones/add_circle.png');
    expect(image.alt).toContain('operador de adição');
  });

  it('should render with correct src and alt after switching operacao several times', () => {
    component.operacao = 'decrementar';
    component.operacao = 'incrementar';
    component.operacao = 'decrementar';
    component.operacao = 'incrementar';
    component.operacao = 'decrementar';
    component.operacao = 'incrementar';
    component.operacao = 'decrementar';
    component.operacao = 'incrementar';
    component.operacao = 'decrementar';
    component.operacao = 'incrementar';

    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('assets/icones/add_circle.png');
    expect(image.alt).toContain('operador de adição');
  });

  // testes para quando operacao = 'incrementar' e src e alt recebem valores inválidos

  it('should render img element with src binding', () => {
    // operacao = 'incrementar';
    component.src = 'assets/teste.jpg';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('assets/icones/add_circle.png');
  });

  it('should render img element with alt binding', () => {
    // operacao = 'incrementar';
    component.alt = 'Teste';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.alt).toContain('operador de adição');
  });

  it('should bind src and alt inputs together', () => {
    // operacao = 'incrementar';
    component.src = 'assets/test.png';
    component.alt = 'Teste';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('assets/icones/add_circle.png');
    expect(image.alt).toContain('operador de adição');
  });

  // testes para quando operacao = 'decrementar' e src e alt recebem valores inválidos

  it('should receive operacao = decrementar', () => {
    component.operacao = 'decrementar';
    fixture.detectChanges();
    expect(component.operacao).toEqual('decrementar');
  });

  it('should render img element with src binding when operacao = decrementar', () => {
    component.operacao = 'decrementar';
    component.src = 'assets/teste.jpg';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('do_not_disturb_on');
  });

  it('should render img element with alt binding when operacao = decrementar', () => {
    component.operacao = 'decrementar';
    component.alt = 'Teste';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.alt).toContain('operador de subtração');
  });

  it('should bind src and alt inputs together when operacao = decrementar', () => {
    component.operacao = 'decrementar';
    component.src = 'assets/test.png';
    component.alt = 'Teste';
    fixture.detectChanges();

    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('do_not_disturb_on');
    expect(image.alt).toContain('operador de subtração');
  });

  it('should gracefully handle src with whitespaces', () => {
    component.src = ' assets/test.png  ';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('assets/icones/add_circle.png');
  });

  it('should handle whitespace-only alt gracefully', () => {
    component.alt = '   ';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.alt).toContain('operador de adição');
  });

  it('should gracefully handle src with whitespaces', () => {
    component.alt = ' teste  ';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.alt).toContain('operador de adição');
  });

  it('should handle special characters in alt text', () => {
    component.alt = 'Testing & image <test> "quotes"';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.alt).toContain('operador de adição');
  });

  it('should handle very long src path', () => {
    const longPath = 'assets/' + 'subfolder/'.repeat(10) + 'teste.jpg';
    component.src = longPath;
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('assets/icones/add_circle.png');
  });

  it('should handle invalid src format', () => {
    component.src = 'not-a-valid-url!!!';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('assets/icones/add_circle.png');
  });

  // testes para quando operacao for inválida

  it('should receive operacao = invalida', () => {
    component.operacao = 'invalida' as 'incrementar' | 'decrementar';
    fixture.detectChanges();
    expect(component.operacao).toEqual('invalida');
  });

  it('should bind src and alt inputs together when operacao = invalida', () => {
    component.operacao = 'invalida' as 'incrementar' | 'decrementar';
    component.src = 'assets/test.png';
    component.alt = 'Teste';
    fixture.detectChanges();

    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('do_not_disturb_on');
    expect(image.alt).toContain('operador de subtração');
  });
});
