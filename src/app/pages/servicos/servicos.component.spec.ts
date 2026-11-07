import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServicosComponent } from './servicos.component';

describe('ServicosComponent', () => {
  let component: ServicosComponent;
  let fixture: ComponentFixture<ServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 6 tech service cards', () => {
    expect(component.servicos.length).toBe(6);
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.service-tech-card');
    expect(cards.length).toBe(6);
  });

  it('should render 4 steps of service flow', () => {
    expect(component.passosAtendimento.length).toBe(4);
    const compiled = fixture.nativeElement as HTMLElement;
    const steps = compiled.querySelectorAll('.flow-card');
    expect(steps.length).toBe(4);
  });
});
