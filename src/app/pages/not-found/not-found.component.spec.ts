import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { SeoService } from '../../core/seo.service';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let seoService: SeoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent],
      providers: [provideRouter([]), SeoService]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    seoService = TestBed.inject(SeoService);
    fixture.detectChanges();
  });

  it('should create the not found component', () => {
    expect(component).toBeTruthy();
  });

  it('should set noindex robots meta tag', () => {
    expect(seoService.getTitle()).toContain('Página Não Encontrada (404)');
  });
});
