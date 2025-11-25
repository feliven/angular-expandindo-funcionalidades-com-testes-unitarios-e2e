import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { DepoimentosComponent } from './depoimentos.component';
import { provideHttpClient } from '@angular/common/http';

describe('DepoimentosComponent', () => {
  let component: DepoimentosComponent;
  let fixture: ComponentFixture<DepoimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepoimentosComponent],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(DepoimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
