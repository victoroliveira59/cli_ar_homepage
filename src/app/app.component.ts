import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from './pages/home/home.component'
import { ServicosComponent } from './pages/servicos/servicos.component'
import { SobreComponent } from './pages/sobre/sobre.component'
import { ContatoComponent } from './pages/contato/contato.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            CommonModule,
            RouterModule,
            NavbarComponent,
            FooterComponent,
            HomeComponent,
            ServicosComponent,
            SobreComponent,
            ContatoComponent],
            
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
