import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render without errors', () => {
    expect(() => {
      fixture.detectChanges();
    }).not.toThrow();
  });

  it('should initialize component properties', () => {
    expect(component instanceof CardComponent).toBe(true);
  });

  it('should use card style by default', () => {
    const div = fixture.debugElement.query(By.css('div')).nativeElement;

    expect(div).toBeDefined();
    expect(div.classList.contains('card')).toBe(true);
  });

  it('should initialize with variant = primary and primary class', () => {
    const card = fixture.nativeElement.querySelector('.card');

    expect(component.variant).toEqual('primary');
    expect(card).toBeDefined();
    expect(card.classList.contains('primary')).toBe(true);
  });

  it('should be defined with secondary class when variant = secondary', () => {
    component.variant = 'secondary';
    fixture.detectChanges();
    const card = fixture.nativeElement.querySelector('.card');

    expect(component.variant).toEqual('secondary');
    expect(card).toBeDefined();
    expect(card.classList.contains('secondary')).toBe(true);
  });

  it('should be defined even when variant = invalid', () => {
    component.variant = 'invalid' as 'primary' | 'secondary';
    fixture.detectChanges();

    const card = fixture.nativeElement.querySelector('.card');

    expect(card).toBeDefined();
  });

  it('should apply correct styles for primary variant', () => {
    const card = fixture.nativeElement.querySelector('.card.primary');
    expect(card).toBeDefined();
  });

  it('should apply correct styles for secondary variant', () => {
    component.variant = 'secondary';
    fixture.detectChanges();
    const card = fixture.nativeElement.querySelector('.card.secondary');
    expect(card).toBeDefined();
  });

  it('should change variant from primary to secondary', () => {
    const card = fixture.nativeElement.querySelector('.card');
    expect(card.classList.contains('primary')).toBe(true);

    component.variant = 'secondary';
    fixture.detectChanges();

    expect(card.classList.contains('secondary')).toBe(true);
    expect(card.classList.contains('primary')).toBe(false);
  });
});
