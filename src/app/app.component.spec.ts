import { TestBed, ComponentFixture } from '@angular/core/testing';
import { expect } from '@jest/globals';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

@Component({ selector: 'app-header', template: '', standalone: false })
class MockHeaderComponent {}

@Component({ selector: 'app-footer', template: '', standalone: false })
class MockFooterComponent {}

@Component({ selector: 'router-outlet', template: '', standalone: false })
class MockRouterOutlet {}

@Component({ template: '<app-root></app-root>', standalone: false })
class TestHostComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockFooterComponent,
        MockRouterOutlet,
      ],
      providers: [provideHttpClient(), provideRouter([])],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'jornada-milhas'`, () => {
    expect(component.title).toEqual('jornada-milhas');
  });

  it('should render app-header component', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });

  it('should render app-footer component', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  it('should render router-outlet', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});

describe('AppComponent', () => {
  it('should have selector app-root', () => {
    TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        AppComponent,
        MockHeaderComponent,
        MockFooterComponent,
        MockRouterOutlet,
      ],
      providers: [provideHttpClient(), provideRouter([])],
    });
    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();
    const compiled = hostFixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-root')).toBeTruthy();
  });
});
