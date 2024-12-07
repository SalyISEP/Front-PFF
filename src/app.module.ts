import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';  // Pour les boutons
import { MatSidenavModule } from '@angular/material/sidenav';  // Pour mat-sidenav
import { MatIconModule } from '@angular/material/icon';  // Si tu utilises des icônes
import { MatToolbarModule } from '@angular/material/toolbar';  // Pour une barre de navigation (si utilisée)
import { MatListModule } from '@angular/material/list';  // Si tu veux des listes dans le sidenav
import { AppComponent } from './app.component';
import { DemandeCompteurComponent } from './demande-compteur/demande-compteur.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    DemandeCompteurComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,    // Ajoute ce module
    MatSidenavModule,   // Ajoute ce module
    MatIconModule,      // Ajoute ce module si tu utilises des icônes
    MatToolbarModule,   // Si tu veux une barre de navigation
    MatListModule       // Si tu veux des éléments de liste dans le sidenav
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
