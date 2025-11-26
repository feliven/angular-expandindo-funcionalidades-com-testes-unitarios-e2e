import { TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { PedidosService } from './pedidos.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { Reserva } from '../core/types/type';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

describe('PedidosService', () => {
  let service: PedidosService;
  let httpMock: HttpTestingController;
  const apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        PedidosService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(PedidosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve recuperar pedidos da API via GET', () => {
    const pedidosDummy: Reserva[] = [
      {
        destino: 'Rio de Janeiro',
        dataIda: '2024-07-01',
        dataVolta: '2024-07-15',
        origem: 'São Paulo',
        estadoOrigem: 'SP',
        adultos: 2,
        valorFinal: 3500.0,
      },
      {
        destino: 'Salvador',
        dataIda: '2024-08-01',
        dataVolta: '2024-08-10',
        origem: 'Brasília',
        estadoOrigem: 'DF',
        adultos: 1,
        valorFinal: 2000.0,
      },
    ];

    service.getPedidos().subscribe((pedidos) => {
      expect(pedidos.length).toBe(2);
      expect(pedidos).toEqual(pedidosDummy);
    });

    const request = httpMock.expectOne(`${apiUrl}/reserva/pedidos`);
    expect(request.request.method).toBe('GET');
    request.flush(pedidosDummy);
  });

  it('deve remover pedido da API via DELETE', () => {
    const pedidoId = 1;

    service.removerPedido(pedidoId).subscribe((response) => {
      expect(response).toEqual([]);
    });

    const request = httpMock.expectOne(`${apiUrl}/reserva/pedidos/${pedidoId}`);
    expect(request.request.method).toBe('DELETE');
    request.flush([]);
  });
});
