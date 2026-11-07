import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let titleService: Title;
  let metaService: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeoService, Title, Meta]
    });
    service = TestBed.inject(SeoService);
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update title and meta tags correctly', () => {
    service.setMetadata({
      title: 'Teste Alves Refrigeração',
      description: 'Descrição de teste para SEO em Nova Lima.',
      canonicalUrl: 'https://alvesrefrigeracao.com.br/teste',
      ogType: 'article'
    });

    expect(titleService.getTitle()).toBe('Teste Alves Refrigeração');
    expect(service.getTitle()).toBe('Teste Alves Refrigeração');

    const descTag = metaService.getTag('name="description"');
    expect(descTag?.content).toBe('Descrição de teste para SEO em Nova Lima.');
    expect(service.getDescription()).toBe('Descrição de teste para SEO em Nova Lima.');

    const ogTitle = metaService.getTag('property="og:title"');
    expect(ogTitle?.content).toBe('Teste Alves Refrigeração');

    const ogDesc = metaService.getTag('property="og:description"');
    expect(ogDesc?.content).toBe('Descrição de teste para SEO em Nova Lima.');

    const ogType = metaService.getTag('property="og:type"');
    expect(ogType?.content).toBe('article');

    expect(service.getCanonicalUrl()).toBe('https://alvesrefrigeracao.com.br/teste');
  });

  it('should set robots meta tag when provided', () => {
    service.setMetadata({
      title: 'Página Não Indexável',
      description: 'Página de erro 404',
      robots: 'noindex, nofollow'
    });

    const robotsTag = metaService.getTag('name="robots"');
    expect(robotsTag?.content).toBe('noindex, nofollow');
  });

  it('should inject JSON-LD script into head', () => {
    service.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Alves Refrigeração'
    }, 'test-jsonld');

    const script = document.getElementById('test-jsonld') as HTMLScriptElement;
    expect(script).toBeTruthy();
    expect(script.type).toBe('application/ld+json');
    expect(script.textContent).toContain('Alves Refrigeração');
  });
});
