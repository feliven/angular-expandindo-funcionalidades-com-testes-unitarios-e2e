import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { PrecosComponent } from './precos.component';
import { provideHttpClient } from '@angular/common/http';

describe('PrecosComponent', () => {
  let component: PrecosComponent;
  let fixture: ComponentFixture<PrecosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecosComponent],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(PrecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
