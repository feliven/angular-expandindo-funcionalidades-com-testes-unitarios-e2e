import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { RadioOption } from '../../core/types/type';
import { RadioButtonGroupComponent } from './radio-button-group.component';
import { CommonModule } from '@angular/common';

describe('RadioButtonGroupComponent', () => {
  let component: RadioButtonGroupComponent;
  let fixture: ComponentFixture<RadioButtonGroupComponent>;

  const mockOptions: RadioOption[] = [
    { id: '1', label: 'Option 1', value: 'option1' },
    { id: '2', label: 'Option 2', value: 'option2' },
    { id: '3', label: 'Option 3', value: 'option3' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [RadioButtonGroupComponent],
    });
    fixture = TestBed.createComponent(RadioButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.options).toEqual([]);
    expect(component.flexDirection).toBe('column');
    expect(component.disabled).toBe(false);
  });

  it('should call onSelect when defaultValue is set on ngOnChanges', () => {
    const spy = jest.spyOn(component, 'onSelect');
    component.defaultValue = mockOptions[0];
    component.ngOnChanges();
    expect(spy).toHaveBeenCalledWith(mockOptions[0]);
  });

  it('should set radioOption when writeValue is called', () => {
    component.writeValue(mockOptions[0]);
    expect(component.radioOption).toEqual(mockOptions[0]);
  });

  it('should register onChange callback', () => {
    const fn = jest.fn();
    component.registerOnChange(fn);
    expect(component.onChange).toBe(fn);
  });

  it('should register onTouched callback', () => {
    const fn = jest.fn();
    component.registerOnTouched(fn);
    expect(component.onTouched).toBe(fn);
  });

  it('should set disabled state', () => {
    component.setDisabledState?.(true);
    expect(component.disabled).toBe(true);
    component.setDisabledState?.(false);
    expect(component.disabled).toBe(false);
  });

  it('should select option and trigger callbacks when onSelect is called', () => {
    const onChangeFn = jest.fn();
    const onTouchedFn = jest.fn();
    component.registerOnChange(onChangeFn);
    component.registerOnTouched(onTouchedFn);

    component.onSelect(mockOptions[0]);

    expect(component.radioOption).toEqual(mockOptions[0]);
    expect(onChangeFn).toHaveBeenCalledWith(mockOptions[0]);
    expect(onTouchedFn).toHaveBeenCalled();
  });

  it('should emit selectionChange when option is selected', () => {
    const spy = jest.spyOn(component.selectionChange, 'emit');
    component.onSelect(mockOptions[1]);
    expect(spy).toHaveBeenCalledWith(mockOptions[1]);
  });

  it('should not select option when disabled', () => {
    const onChangeFn = jest.fn();
    component.registerOnChange(onChangeFn);
    component.disabled = true;

    component.onSelect(mockOptions[0]);

    expect(onChangeFn).not.toHaveBeenCalled();
  });

  it('should return correct flexGap for column direction', () => {
    component.flexDirection = 'column';
    expect(component.flexGap).toBe('10px');
  });

  it('should return correct flexGap for row direction', () => {
    component.flexDirection = 'row';
    expect(component.flexGap).toBe('40px');
  });

  it('should not call onChange when it is not registered', () => {
    expect(() => component.onSelect(mockOptions[0])).not.toThrow();
  });

  it('should not call onTouched when it is not registered', () => {
    component.onChange = jest.fn();
    expect(() => component.onSelect(mockOptions[0])).not.toThrow();
  });
});
