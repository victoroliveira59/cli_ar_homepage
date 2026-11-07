import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FaqAreasComponent } from './faq-areas.component';
import { SeoService } from '../../core/seo.service';
import { FAQS_DATA, REGIONS_DATA } from '../../data/faq-areas-data';

describe('FaqAreasComponent', () => {
  let component: FaqAreasComponent;
  let fixture: ComponentFixture<FaqAreasComponent>;
  let seoService: SeoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqAreasComponent],
      providers: [
        provideRouter([]),
        SeoService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FaqAreasComponent);
    component = fixture.componentInstance;
    seoService = TestBed.inject(SeoService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(component.faqs.length).toBe(FAQS_DATA.length);
    expect(component.regions.length).toBe(REGIONS_DATA.length);
  });

  it('should set SEO metadata for FAQ page', () => {
    expect(seoService.getTitle()).toBe('Dúvidas Frequentes e Regiões Atendidas | Alves Refrigeração');
    expect(seoService.getDescription()).toContain('Tire suas dúvidas sobre garantia de 90 dias');
    expect(seoService.getCanonicalUrl()).toContain('/perguntas-frequentes');
  });

  it('should toggle FAQ open state', () => {
    const targetIndex = 3;
    expect(component.isFaqOpen(targetIndex)).toBeFalse();

    component.toggleFaq(targetIndex);
    expect(component.isFaqOpen(targetIndex)).toBeTrue();

    component.toggleFaq(targetIndex);
    expect(component.isFaqOpen(targetIndex)).toBeFalse();
  });
});
