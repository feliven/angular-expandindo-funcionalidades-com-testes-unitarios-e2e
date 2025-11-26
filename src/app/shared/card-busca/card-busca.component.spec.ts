import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { CardBuscaComponent } from './card-busca.component';
import { Router } from '@angular/router';
import { Promocao } from '../../core/types/type';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { FormBuscaComponent } from '../../shared/form-busca/form-busca.component';
import { FiltrosComplementaresComponent } from '../../busca/filtros-complementares/filtros-complementares.component';
import { CardComponent } from '../../shared/card/card.component';
import { PassagemDestaqueComponent } from '../../busca/passagem-destaque/passagem-destaque.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('CardBuscaComponent', () => {
  let component: CardBuscaComponent;
  let fixture: ComponentFixture<CardBuscaComponent>;
  const routerMock = { navigate: jest.fn() };

  beforeEach(() => {
    // Prevent "Not implemented: window.alert" by mocking alert
    (window as any).alert = jest.fn();

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MatCard, MatCardContent, MatCardActions],
      declarations: [
        CardBuscaComponent,
        BannerComponent,
        ContainerComponent,
        FormBuscaComponent,
        FiltrosComplementaresComponent,
        CardComponent,
        PassagemDestaqueComponent,
      ],
      providers: [{ provide: Router, useValue: routerMock }],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(CardBuscaComponent);
    component = fixture.componentInstance;
    component.promocao = {
      id: 1,
      imagem: 'test.jpg',
      destino: 'Test',
      preco: 100,
    };
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.resetAllMocks();
    // clean up mocked alert
    delete (window as any).alert;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display promocao data in the template', () => {
    const mockPromocao: Promocao = {
      id: 2,
      imagem: 'test-image.jpg',
      destino: 'Paris',
      preco: 1500,
    };
    component.promocao = mockPromocao;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const destino = compiled.querySelector('li:first-child');
    const preco = compiled.querySelector('li:last-child');

    expect(destino.textContent).toContain('Paris');
    expect(preco.textContent).toContain('1500');
  });

  it('should render image src containing promocao.imagem', () => {
    const mockPromocao: Promocao = {
      id: 3,
      imagem: 'image-xyz.jpg',
      destino: 'Tokyo',
      preco: 2000,
    };
    component.promocao = mockPromocao;
    fixture.detectChanges();

    const img: HTMLImageElement | null =
      fixture.nativeElement.querySelector('img');
    expect(img).not.toBeNull();
    expect(img!.src).toContain('image-xyz.jpg');
  });

  it('should navigate to detalhe page when button is clicked', () => {
    const mockPromocao: Promocao = {
      id: 2,
      imagem: 'test-image.jpg',
      destino: 'Paris',
      preco: 1500,
    };
    component.promocao = mockPromocao;

    const routerSpy = jest.spyOn(component['router'], 'navigate');

    component.onDetalheClick();

    expect(routerSpy).toHaveBeenCalledWith(['detalhe']);
  });

  it('should have a button labeled VER DETALHES', () => {
    const button: HTMLButtonElement | null =
      fixture.nativeElement.querySelector('button');
    expect(button).not.toBeNull();
    expect(button!.textContent!.toUpperCase()).toContain('VER DETALHES');
  });

  it('should call onDetalheClick when VER DETALHES button is clicked', () => {
    const mockPromocao: Promocao = {
      id: 2,
      imagem: 'test-image.jpg',
      destino: 'Paris',
      preco: 1500,
    };
    component.promocao = mockPromocao;
    fixture.detectChanges();

    const onDetalheClickSpy = jest.spyOn(component, 'onDetalheClick');
    const button = fixture.nativeElement.querySelector('button');

    button.click();

    expect(onDetalheClickSpy).toHaveBeenCalled();
  });

  it('mocks window.alert to avoid Not implemented error', () => {
    (window as any).alert('test-alert');
    expect((window as any).alert).toHaveBeenCalledWith('test-alert');
  });
});
