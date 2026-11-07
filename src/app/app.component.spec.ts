import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize with isLoading set to true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.isLoading).toBeTrue();
  });

  it('should initialize visibleSections correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.visibleSections['home']).toBeFalse();
    expect(app.visibleSections['arcondicionado']).toBeFalse();
    expect(app.visibleSections['servicos']).toBeFalse();
    expect(app.visibleSections['sobre']).toBeFalse();
    expect(app.visibleSections['contato']).toBeFalse();
  });
});
