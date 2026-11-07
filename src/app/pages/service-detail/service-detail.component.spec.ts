import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ServiceDetailComponent } from './service-detail.component';
import { SeoService } from '../../core/seo.service';
import { SERVICES_DATA } from '../../data/services-data';

describe('ServiceDetailComponent', () => {
  let component: ServiceDetailComponent;
  let fixture: ComponentFixture<ServiceDetailComponent>;
  let seoService: SeoService;
  let router: Router;

  const validSlug = 'instalacao-ar-condicionado';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailComponent],
      providers: [
        provideRouter([]),
        SeoService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ slug: validSlug })
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceDetailComponent);
    component = fixture.componentInstance;
    seoService = TestBed.inject(SeoService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component for a valid slug', () => {
    expect(component).toBeTruthy();
    expect(component.service).toBeDefined();
    expect(component.service?.slug).toBe(validSlug);
  });

  it('should set SEO metadata for the specific service', () => {
    const expected = SERVICES_DATA[validSlug];
    expect(seoService.getTitle()).toBe(expected.title);
    expect(seoService.getDescription()).toBe(expected.description);
    expect(seoService.getCanonicalUrl()).toContain(`/servicos/${validSlug}`);
  });

  it('should generate personalized WhatsApp link with encoded message', () => {
    const link = component.getWhatsAppLink();
    expect(link).toContain('https://wa.me/5531992855049?text=');
    expect(link).toContain(encodeURIComponent(SERVICES_DATA[validSlug].whatsappMessage));
  });
});

describe('ServiceDetailComponent with invalid slug', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDetailComponent],
      providers: [
        provideRouter([]),
        SeoService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ slug: 'servico-inexistente' })
            }
          }
        }
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    const fixture = TestBed.createComponent(ServiceDetailComponent);
    fixture.detectChanges();
  });

  it('should redirect to /404 when slug does not exist', () => {
    expect(router.navigate).toHaveBeenCalledWith(['/404'], { replaceUrl: true });
  });
});
