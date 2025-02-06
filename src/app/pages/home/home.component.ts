import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importando o RouterModule

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [RouterModule] // Adicionando RouterModule no campo imports
})
export class HomeComponent { }
