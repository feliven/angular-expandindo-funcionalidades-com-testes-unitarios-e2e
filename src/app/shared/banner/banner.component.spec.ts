import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render img element with src binding', () => {
    component.src = 'assets/banner.jpg';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('assets/banner.jpg');
  });

  it('should render img element with alt binding', () => {
    component.alt = 'Banner image';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.alt).toBe('Banner image');
  });

  it('should render img element inside figure element', () => {
    const figure = fixture.nativeElement.querySelector('figure');
    const image = figure.querySelector('img');
    expect(figure).toBeTruthy();
    expect(image).toBeTruthy();
  });

  it('should bind src and alt inputs together', () => {
    component.src = 'assets/test.png';
    component.alt = 'Test banner';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('assets/test.png');
    expect(image.alt).toBe('Test banner');
  });

  // tests for src and alt

  it('should render with empty alt by default', () => {
    const image = fixture.nativeElement.querySelector('img');
    expect(image.alt).toBe('');
  });

  it('should gracefully handle src with whitespaces', () => {
    component.src = ' assets/test.png  ';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('assets/test.png');
  });

  it('should handle whitespace-only alt gracefully', () => {
    component.alt = '   ';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.alt).toBe('');
  });

  it('should gracefully handle src with whitespaces', () => {
    component.alt = ' teste  ';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.alt).toBe('teste');
  });

  it('should handle special characters in alt text', () => {
    component.alt = 'Banner & image <test> "quotes"';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.alt).toBe('Banner & image <test> "quotes"');
  });

  it('should handle very long src path', () => {
    const longPath = 'assets/' + 'subfolder/'.repeat(10) + 'banner.jpg';
    component.src = longPath;
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain(longPath);
  });

  it('should handle invalid src format', () => {
    component.src = 'not-a-valid-url!!!';
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image.src).toContain('not-a-valid-url!!!');
  });
});
