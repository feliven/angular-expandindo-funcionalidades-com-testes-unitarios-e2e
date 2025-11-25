import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { CompanhiasComponent } from './companhias.component';
import { provideHttpClient } from '@angular/common/http';

describe('CompanhiasComponent', () => {
  let component: CompanhiasComponent;
  let fixture: ComponentFixture<CompanhiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanhiasComponent],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(CompanhiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
