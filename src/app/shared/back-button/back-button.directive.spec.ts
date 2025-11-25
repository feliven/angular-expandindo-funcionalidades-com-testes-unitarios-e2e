import { BackButtonDirective } from './back-button.directive';
import { expect } from '@jest/globals';

describe('BackButtonDirective', () => {
  it('should create an instance', () => {
    const directive = new BackButtonDirective();
    expect(directive).toBeTruthy();
  });
});
