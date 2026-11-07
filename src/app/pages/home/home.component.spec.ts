import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have hero content visible immediately without gate', () => {
    expect(component.isContentVisible).toBeTrue();
    expect(component.isLoading).toBeFalse();
  });

  it('should render trust badges and business phone', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-trust')).toBeTruthy();
    expect(compiled.textContent).toContain('Garantia formal de 90 dias');
    expect(compiled.textContent).toContain('(31) 99285-5049');
  });

  it('should render 4 process steps', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const steps = compiled.querySelectorAll('.process-step');
    expect(steps.length).toBe(4);
  });
});
