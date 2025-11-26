import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { PerfilComponent } from './perfil.component';
import { provideHttpClient } from '@angular/common/http';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  const mockCadastro = {
    nome: 'Fulano',
    nascimento: '1990-01-01',
    cpf: '00000000000',
    cidade: 'Cidade',
    email: 'a@b.com',
    senha: 'secret',
    genero: 'M',
    telefone: '1234',
    estado: 'UF',
  };

  const cadastroServiceMock = {
    buscarCadastro: jest.fn().mockReturnValue(of(mockCadastro)),
    editarCadastro: jest.fn().mockReturnValue(of({})),
  };

  const tokenServiceMock = {
    retornarToken: jest.fn().mockReturnValue('token-123'),
  };

  const formularioMockForm = new FormGroup({
    nome: new FormControl(''),
    nascimento: new FormControl(''),
    cpf: new FormControl(''),
    cidade: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    genero: new FormControl(''),
    telefone: new FormControl(''),
    estado: new FormControl(''),
  });

  const formularioServiceMock = {
    getCadastro: jest.fn().mockReturnValue(formularioMockForm),
  };

  const userServiceMock = {
    logout: jest.fn(),
  };

  const routerMock = {
    navigate: jest.fn(),
  };

  beforeEach(() => {
    // Prevent "Not implemented: window.alert" by mocking alert
    (window as any).alert = jest.fn();

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PerfilComponent],
      providers: [
        provideHttpClient(),
        { provide: 'CadastroService', useValue: cadastroServiceMock },
        { provide: 'TokenService', useValue: tokenServiceMock },
        { provide: 'FormularioService', useValue: formularioServiceMock },
        { provide: 'UserService', useValue: userServiceMock },
        { provide: 'Router', useValue: routerMock },
        // In the real app these are Angular-injected tokens; override by token name matching injector usage
        {
          provide: (PerfilComponent as any).ɵfac?.name || 'CadastroService',
          useValue: cadastroServiceMock,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA], // ignore unknown elements/attributes from material child components
    });

    // Since the component uses constructor injection by types, set providers by class types directly when possible
    // Provide class-based replacements if necessary
    // Only override provider when a valid token is available to avoid calling overrideProvider(undefined,...)
    const overrideToken = (PerfilComponent as any).__annotations__?.[0]
      ?.providers;
    if (overrideToken) {
      TestBed.overrideProvider(overrideToken, {});
    }

    // Create component
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;

    // Ensure component has the mocks even if DI by token name fails in this environment
    // @ts-ignore
    component['cadastroService'] = cadastroServiceMock;
    // @ts-ignore
    component['tokenService'] = tokenServiceMock;
    // @ts-ignore
    component['formularioService'] = formularioServiceMock;
    // @ts-ignore
    component['userService'] = userServiceMock;
    // @ts-ignore
    component['router'] = routerMock;

    fixture.detectChanges();
  });

  afterEach(() => {
    // jest.resetAllMocks();
    // clean up mocked alert
    delete (window as any).alert;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should set token, nome and load form values', () => {
    expect(tokenServiceMock.retornarToken).toHaveBeenCalled();
    expect(component.token).toBe('token-123');
    expect(cadastroServiceMock.buscarCadastro).toHaveBeenCalled();
    expect(component.nome).toBe(mockCadastro.nome);

    const f = component.form as FormGroup;
    expect(f.value.nome).toBe(mockCadastro.nome);
    expect(f.value.email).toBe(mockCadastro.email);
    expect(f.value.estado).toBe(mockCadastro.estado);
  });

  it('carregarFormulario should not throw when formularioService returns null', () => {
    // make formularioService return null to simulate edge case
    formularioServiceMock.getCadastro = jest.fn().mockReturnValue(null);
    // ensure cadastro is present so patching would attempt to run
    component.cadastro = mockCadastro as any;
    expect(() => component.carregarFormulario()).not.toThrow();
    expect(component.form).toBeNull();
  });

  it('atualizar should still call editarCadastro even if form is null', () => {
    component.form = null;
    cadastroServiceMock.editarCadastro = jest.fn().mockReturnValue(of({}));
    component.atualizar();
    expect(cadastroServiceMock.editarCadastro).toHaveBeenCalled();
  });

  it('atualizar should call editarCadastro and navigate on success', () => {
    // prepare form values
    component.form = new FormGroup({
      nome: new FormControl('Novo'),
      nascimento: new FormControl('2000-01-01'),
      cpf: new FormControl('111'),
      telefone: new FormControl('222'),
      email: new FormControl('x@x.com'),
      senha: new FormControl('pwd'),
      genero: new FormControl('F'),
      cidade: new FormControl('Outra'),
      estado: new FormControl('EY'),
    });

    // spy alert
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    cadastroServiceMock.editarCadastro = jest.fn().mockReturnValue(of({}));
    component.atualizar();

    expect(cadastroServiceMock.editarCadastro).toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Cadastro editado com sucesso');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/']);

    alertSpy.mockRestore();
  });

  it('atualizar should log error on failure', () => {
    component.form = formularioMockForm;
    const error = new Error('fail');
    cadastroServiceMock.editarCadastro = jest
      .fn()
      .mockReturnValue(throwError(() => error));
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    component.atualizar();

    expect(cadastroServiceMock.editarCadastro).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(error);

    consoleSpy.mockRestore();
  });

  it('deslogar should call logout and navigate to login', () => {
    component.deslogar();
    expect(userServiceMock.logout).toHaveBeenCalled();
    expect(routerMock.navigate).toHaveBeenCalledWith(['auth/login']);
  });
});
