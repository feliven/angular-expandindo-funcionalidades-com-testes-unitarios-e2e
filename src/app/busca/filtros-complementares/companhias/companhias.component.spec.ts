import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { CompanhiasComponent } from './companhias.component';
import { provideHttpClient } from '@angular/common/http';
import { LabelComponent } from '../label/label.component';

describe('CompanhiasComponent', () => {
  let component: CompanhiasComponent;
  let fixture: ComponentFixture<CompanhiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanhiasComponent, LabelComponent],
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
