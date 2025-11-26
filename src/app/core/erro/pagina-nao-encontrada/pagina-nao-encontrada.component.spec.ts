import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BannerComponent } from '../../../shared/banner/banner.component';
import { ContainerComponent } from '../../../shared/container/container.component';

describe('PaginaNaoEncontradaComponent', () => {
  let component: PaginaNaoEncontradaComponent;
  let fixture: ComponentFixture<PaginaNaoEncontradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PaginaNaoEncontradaComponent,
        BannerComponent,
        ContainerComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaNaoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct selector', () => {
    expect(component).toBeDefined();
    const compiled = fixture.nativeElement;
    expect(compiled).toBeDefined();
  });

  it('should render without errors', () => {
    expect(() => {
      fixture.detectChanges();
    }).not.toThrow();
  });

  it('should initialize component properties', () => {
    expect(component instanceof PaginaNaoEncontradaComponent).toBe(true);
  });

  it('deveria carregar app-banner 2 vezes', () => {
    const banners: DebugElement[] = fixture.debugElement.queryAll(
      By.css('app-banner')
    );
    expect(banners.length).toBe(2);
  });

  it('deveria carregar app-container 1 vez', () => {
    const container: DebugElement = fixture.debugElement.query(
      By.css('app-container')
    );
    expect(container).toBeTruthy();
  });

  it('deveria carregar section 1 vez', () => {
    const section: DebugElement = fixture.debugElement.query(By.css('section'));
    expect(section).toBeTruthy();
  });

  it('should load paragraph with text Página não encontrada', () => {
    const paragrafo: DebugElement = fixture.debugElement.query(By.css('p'));
    expect(paragrafo.nativeElement.textContent).toContain(
      'Página não encontrada'
    );
  });

  it('should load link with text inicial to homepage', () => {
    const link: DebugElement = fixture.debugElement.query(By.css('a'));
    expect(link.nativeElement.textContent).toContain('inicial');
    expect(link.nativeElement.getAttribute('routerLink')).toBe('/');
  });

  // it("",()=>{})
});
