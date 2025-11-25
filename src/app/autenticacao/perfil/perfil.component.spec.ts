import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { PerfilComponent } from './perfil.component';
import { provideHttpClient } from '@angular/common/http';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilComponent],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
