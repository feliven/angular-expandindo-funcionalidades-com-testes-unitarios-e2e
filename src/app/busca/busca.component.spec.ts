import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { BuscaComponent } from './busca.component';
import { provideHttpClient } from '@angular/common/http';

describe('BuscaComponent', () => {
  let component: BuscaComponent;
  let fixture: ComponentFixture<BuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaComponent],
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
