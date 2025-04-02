import {
  Component,
  HostListener,
  AfterViewInit,
  ChangeDetectorRef,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../scroll.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Console } from 'console';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, NgxSpinnerModule]
})
export class HomeComponent implements OnInit, AfterViewInit {
  isImageVisible = false;
  isUrgencyExpanded = false;
  isContentVisible = false;
  isLoading = true;

  @ViewChild('parallaxBg', { static: true }) parallaxBg!: ElementRef; // ✅ Usa static: true se o elemento já existir no DOM

  constructor(
    private scrollService: ScrollService,
    private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show(); // ✅ Mostra o spinner ao iniciar
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      this.isImageVisible = true;
      this.isContentVisible = true;
      this.isLoading = false;
      this.spinner.hide(); // ✅ Esconde o spinner após carregar
      this.cdr.detectChanges();
    });
  }

  goToServicos(): void {
    this.scrollService.scrollToSection('contato');
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY;

    // ✅ Melhor forma de acessar o parallax
    if (this.parallaxBg?.nativeElement) {
      this.parallaxBg.nativeElement.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    }

    // ✅ Melhor detecção para aparecer imagem
    this.isImageVisible = scrollPosition > window.innerHeight * 0.5;
  }
}
