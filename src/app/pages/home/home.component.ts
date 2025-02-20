import { Component, HostListener, AfterViewInit, ChangeDetectorRef, OnInit, ViewChild, ElementRef } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ScrollService } from '../../scroll.service'
import { NavbarComponent } from "../../components/navbar/navbar.component"
import { NgxSpinnerService } from 'ngx-spinner'
import { NgxSpinnerModule } from 'ngx-spinner'

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, NavbarComponent, NgxSpinnerModule]
})
export class HomeComponent implements OnInit, AfterViewInit {
  isImageVisible = false
  isUrgencyExpanded = false
  isContentVisible = false
  isLoading = true  // ✅ Flag para mostrar o spinner

  @ViewChild('parallaxBg', { static: false }) parallaxBg!: ElementRef // ✅ Evita manipulação direta do DOM

  constructor(
    private scrollService: ScrollService,
    private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.show() // ✅ Mostra o spinner assim que o componente for inicializado
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isImageVisible = true
      this.isContentVisible = true
      this.isLoading = false
      this.spinner.hide() // ✅ Esconde o spinner ao finalizar o carregamento
      this.cdr.detectChanges() // ✅ Garante atualização do template
    }, 1000)
  }

  goToServicos(): void {
    this.scrollService.scrollToSection('contato')
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY

    // ✅ Usa @ViewChild em vez de querySelector para melhor performance
    if (this.parallaxBg) {
      this.parallaxBg.nativeElement.style.transform = `translateY(${scrollPosition * 0.1}px)`
    }

    if (scrollPosition > window.innerHeight * 0.5) {
      this.isImageVisible = true
    }
  }

  onImageLoad(): void {
    setTimeout(() => {
      this.isContentVisible = true
      this.cdr.detectChanges()
    }, 1000)
  }
}
