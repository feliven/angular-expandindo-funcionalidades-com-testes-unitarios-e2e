import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { DropdownUfComponent } from './dropdown-uf.component';
import { provideHttpClient } from '@angular/common/http';

describe('DropdownUfComponent', () => {
  let component: DropdownUfComponent;
  let fixture: ComponentFixture<DropdownUfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownUfComponent],
      providers: [provideHttpClient()],
    });
    fixture = TestBed.createComponent(DropdownUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
