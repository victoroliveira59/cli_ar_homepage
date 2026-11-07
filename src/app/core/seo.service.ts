import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  robots?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private doc: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  setMetadata(metadata: SeoMetadata): void {
    // 1. Atualizar Title
    if (metadata.title) {
      this.titleService.setTitle(metadata.title);
      this.metaService.updateTag({ property: 'og:title', content: metadata.title });
    }

    // 2. Atualizar Meta Description
    if (metadata.description) {
      this.metaService.updateTag({ name: 'description', content: metadata.description });
      this.metaService.updateTag({ property: 'og:description', content: metadata.description });
    }

    // 3. Atualizar Open Graph adicionais
    this.metaService.updateTag({ property: 'og:type', content: metadata.ogType || 'website' });
    this.metaService.updateTag({ property: 'og:locale', content: 'pt_BR' });

    if (metadata.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: metadata.ogImage });
    }

    if (metadata.robots) {
      this.metaService.updateTag({ name: 'robots', content: metadata.robots });
    }

    // 4. Atualizar Canonical URL
    if (metadata.canonicalUrl) {
      this.metaService.updateTag({ property: 'og:url', content: metadata.canonicalUrl });
      this.setCanonicalUrl(metadata.canonicalUrl);
    }
  }

  setJsonLd(schema: object, id: string = 'page-jsonld'): void {
    try {
      let script: HTMLScriptElement | null = this.doc.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = this.doc.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        this.doc.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema, null, 2);
    } catch (e) {
      // Fallback gracioso para ambientes sem head
    }
  }

  private setCanonicalUrl(url: string): void {
    try {
      let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
      if (!link) {
        link = this.doc.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(link);
      }
      link.setAttribute('href', url);
    } catch (e) {
      // Fallback gracioso
    }
  }

  getTitle(): string {
    return this.titleService.getTitle();
  }

  getDescription(): string {
    const tag = this.metaService.getTag('name="description"');
    return tag ? tag.content : '';
  }

  getCanonicalUrl(): string | null {
    const link = this.doc.querySelector('link[rel="canonical"]');
    return link ? link.getAttribute('href') : null;
  }
}
