import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DemandeCompteurComponent } from './demande-compteur/demande-compteur.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    //{ path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "accueil", component: AccueilComponent},
    { path: "demande", component: DemandeCompteurComponent},
    { path: "demande", component: DemandeCompteurComponent}
];

