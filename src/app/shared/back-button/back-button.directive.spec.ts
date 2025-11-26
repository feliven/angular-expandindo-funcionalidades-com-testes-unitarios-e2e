import { BackButtonDirective } from './back-button.directive';
import { Location } from '@angular/common';
import { expect, jest } from '@jest/globals';

describe('BackButtonDirective', () => {
  let directive: BackButtonDirective;
  let mockLocation: jest.Mocked<Location>;

  beforeEach(() => {
    mockLocation = {
      back: jest.fn(),
    } as any;
    directive = new BackButtonDirective(mockLocation);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should call location.back() when onClick is called', () => {
    directive.onClick();
    expect(mockLocation.back).toHaveBeenCalledTimes(1);
  });

  it('should call location.back() multiple times when onClick is called multiple times', () => {
    directive.onClick();
    directive.onClick();
    directive.onClick();
    expect(mockLocation.back).toHaveBeenCalledTimes(3);
  });
});
