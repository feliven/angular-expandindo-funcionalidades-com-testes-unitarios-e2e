import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DropdownUfComponent } from './dropdown-uf.component';
import { provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { UnidadeFederativaService } from '../../core/services/unidade-federativa.service';
import { UnidadeFederativa } from '../../core/types/type';
import { MatAutocomplete } from '@angular/material/autocomplete';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';

describe('DropdownUfComponent', () => {
  let component: DropdownUfComponent;
  let fixture: ComponentFixture<DropdownUfComponent>;
  let unidadeFederativaService: {
    listar: jest.Mock;
  };

  beforeEach(async () => {
    unidadeFederativaService = {
      listar: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [DropdownUfComponent],
      imports: [
        ReactiveFormsModule,
        MatAutocomplete,
        MatIcon,
        MatFormField,
        MatIcon,
        MatLabel,
      ],
      providers: [
        provideHttpClient(),
        {
          provide: UnidadeFederativaService,
          useValue: unidadeFederativaService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownUfComponent);
    component = fixture.componentInstance;
    component.control = new FormControl('');
    unidadeFederativaService.listar.mockReturnValue(of([]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize FormControl before ngOnInit', () => {
    // component.control = new FormControl('');
    expect(() => component.ngOnInit()).not.toThrow();
  });

  it('should initialize with empty unidadesFederativas array', () => {
    expect(component.unidadesFederativas).toEqual([]);
  });

  it('should have required inputs defined', () => {
    expect(component.label).toBe('');
    expect(component.iconePrefixo).toBe('');
    expect(component.placeholder).toBe('');
    expect(component.control).toBeDefined();
  });

  it('should set label input', () => {
    component.label = 'Estado';
    expect(component.label).toBe('Estado');
  });

  it('should set iconePrefixo input', () => {
    component.iconePrefixo = 'location_on';
    expect(component.iconePrefixo).toBe('location_on');
  });

  it('should set placeholder input', () => {
    component.placeholder = 'Selecione um estado';
    expect(component.placeholder).toBe('Selecione um estado');
  });

  it('should call unidadeFederativaService.listar on init', () => {
    component.ngOnInit();
    expect(unidadeFederativaService.listar).toHaveBeenCalledTimes(1);
  });

  it('should initialize filteredOptions$ observable', () => {
    component.ngOnInit();
    expect(component.filteredOptions$).toBeDefined();
  });

  it('should fetch unidades federativas on init', () => {
    const mockData = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
    ];
    unidadeFederativaService.listar.mockReturnValue(of(mockData));

    component.ngOnInit();

    expect(component.unidadesFederativas).toEqual(mockData);
    expect(unidadeFederativaService.listar).toHaveBeenCalled();
  });

  it('should filter options based on input value', () => {
    component.unidadesFederativas = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
      { id: 3, nome: 'Minas Gerais', sigla: 'MG' },
    ];

    const result = component.filtrarUfs('São');
    expect(result).toEqual([{ id: 1, nome: 'São Paulo', sigla: 'SP' }]);
  });

  it('should return empty array when no matches found', () => {
    component.unidadesFederativas = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
    ];

    const result = component.filtrarUfs('Bahia');
    expect(result).toEqual([]);
  });

  it('should display the name of the state', () => {
    const estado = { id: 3, nome: 'Minas Gerais', sigla: 'MG' };
    const result = component.displayFn(estado);
    expect(result).toBe('Minas Gerais');
  });

  it('should return empty string if estado is null', () => {
    const result = component.displayFn(null as unknown as UnidadeFederativa);
    expect(result).toBe('');
  });

  it('should update filteredOptions$ when control value changes', (done) => {
    const mockData = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
    ];
    unidadeFederativaService.listar.mockReturnValue(of(mockData));
    component.ngOnInit();

    component.control.setValue('São');
    component.filteredOptions$?.subscribe((options) => {
      expect(options).toEqual([
        { id: 1, nome: 'São Paulo', sigla: 'SP' },
        { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
      ]);
      done();
    });
  });

  it('should filter options correctly when control value changes', (done) => {
    const mockData = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
      { id: 3, nome: 'Minas Gerais', sigla: 'MG' },
    ];
    unidadeFederativaService.listar.mockReturnValue(of(mockData));
    component.ngOnInit();

    let emissionCount = 0;
    component.filteredOptions$?.subscribe((options) => {
      emissionCount++;
      if (emissionCount === 2) {
        // Skip first emission (startWith), check second
        expect(options).toEqual([
          { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
        ]);
        done();
      }
    });

    setTimeout(() => component.control.setValue('Rio'), 0);
  });

  it('should emit filtered results on subsequent value changes', (done) => {
    const mockData = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Santa Catarina', sigla: 'SC' },
    ];
    unidadeFederativaService.listar.mockReturnValue(of(mockData));
    component.ngOnInit();

    let emissionCount = 0;
    component.filteredOptions$?.subscribe((options) => {
      emissionCount++;
      if (emissionCount === 2) {
        expect(options.length).toBe(1);
        expect(options[0].nome).toBe('Santa Catarina');
        done();
      }
    });

    setTimeout(() => component.control.setValue('Sa'), 0);
  });

  it('should handle rapid consecutive value changes', (done) => {
    const mockData = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
    ];
    unidadeFederativaService.listar.mockReturnValue(of(mockData));
    component.ngOnInit();

    let lastEmission: UnidadeFederativa[] = [];
    component.filteredOptions$?.subscribe((options) => {
      lastEmission = options;
    });

    setTimeout(() => {
      component.control.setValue('São');
      component.control.setValue('Rio');
      setTimeout(() => {
        expect(lastEmission).toEqual([
          { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
        ]);
        done();
      }, 10);
    }, 0);
  });

  it('should return all options when control value is empty', (done) => {
    const mockData = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
    ];
    unidadeFederativaService.listar.mockReturnValue(of(mockData));
    component.ngOnInit();

    component.control.setValue('');
    component.filteredOptions$?.subscribe((options) => {
      expect(options).toEqual(mockData);
      done();
    });
  });

  it('should filter by UnidadeFederativa object', () => {
    component.unidadesFederativas = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
    ];

    const estado: UnidadeFederativa = { id: 1, nome: 'São Paulo', sigla: 'SP' };
    const result = component.filtrarUfs(estado);
    expect(result).toEqual([{ id: 1, nome: 'São Paulo', sigla: 'SP' }]);
  });

  it('should handle empty string filter', () => {
    component.unidadesFederativas = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
    ];

    const result = component.filtrarUfs('');
    expect(result).toEqual(component.unidadesFederativas);
  });

  it('should filter case-insensitively', () => {
    component.unidadesFederativas = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
    ];

    const result = component.filtrarUfs('são paulo');
    expect(result).toEqual([{ id: 1, nome: 'São Paulo', sigla: 'SP' }]);
  });

  it('should filter by partial match', () => {
    component.unidadesFederativas = [
      { id: 1, nome: 'São Paulo', sigla: 'SP' },
      { id: 2, nome: 'Rio de Janeiro', sigla: 'RJ' },
      { id: 3, nome: 'Minas Gerais', sigla: 'MG' },
    ];

    const result = component.filtrarUfs('ger');
    expect(result).toEqual([{ id: 3, nome: 'Minas Gerais', sigla: 'MG' }]);
  });

  it('should handle undefined value in filtrarUfs', () => {
    component.unidadesFederativas = [{ id: 1, nome: 'São Paulo', sigla: 'SP' }];

    const result = component.filtrarUfs(undefined as any);
    expect(result).toEqual([]);
  });

  it('should handle UnidadeFederativa with undefined nome', () => {
    component.unidadesFederativas = [{ id: 1, nome: 'São Paulo', sigla: 'SP' }];

    const estado = { id: 1, nome: undefined, sigla: 'SP' } as any;
    const result = component.filtrarUfs(estado);
    expect(result).toEqual([]);
  });

  it('should return empty array for null value', () => {
    component.unidadesFederativas = [{ id: 1, nome: 'São Paulo', sigla: 'SP' }];

    const result = component.filtrarUfs(null as any);
    expect(result).toEqual([]);
  });
});
