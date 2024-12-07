import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemandeCompteurComponent } from "./demande-compteur/demande-compteur.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DemandeCompteurComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Courant';
}
