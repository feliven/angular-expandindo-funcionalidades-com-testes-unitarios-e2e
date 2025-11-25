import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { PromocoesComponent } from './promocoes.component';
import { provideHttpClient } from '@angular/common/http';

describe('PromocoesComponent', () => {
  let component: PromocoesComponent;
  let fixture: ComponentFixture<PromocoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromocoesComponent],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(PromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
