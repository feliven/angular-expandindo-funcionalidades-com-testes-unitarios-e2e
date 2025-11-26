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

describe('BuscaComponent', () => {
  let component: BuscaComponent;
  let fixture: ComponentFixture<BuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BuscaComponent,
        BannerComponent,
        ContainerComponent,
        FormBuscaComponent,
        FiltrosComplementaresComponent,
        CardComponent,
        PassagemDestaqueComponent,
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
