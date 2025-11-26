import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { LoginComponent } from './login.component';
import { provideHttpClient } from '@angular/common/http';
import {
  MatError,
  MatFormField,
  MatFormFieldControl,
  MatLabel,
} from '@angular/material/form-field';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatInput } from '@angular/material/input';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatLabel,
        MatFormField,
        MatInput,
        MatFormFieldControl,
        MatCardActions,
        MatError,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
      ],
      declarations: [LoginComponent, BannerComponent],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
