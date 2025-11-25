import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { FiltrosComplementaresComponent } from './filtros-complementares.component';
import { provideHttpClient } from '@angular/common/http';

describe('FiltrosComplementaresComponent', () => {
  let component: FiltrosComplementaresComponent;
  let fixture: ComponentFixture<FiltrosComplementaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrosComplementaresComponent],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(FiltrosComplementaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
