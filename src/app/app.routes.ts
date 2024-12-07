import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DemandeCompteurComponent } from './demande-compteur/demande-compteur.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PaiementComponent } from './paiement/paiement.component';
import { ConsulterComponent } from './consulter/consulter.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    //{ path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "accueil", component: AccueilComponent},
    { path: "demande", component: DemandeCompteurComponent},
    { path: "transaction", component: TransactionComponent},
    { path: "paiement", component: PaiementComponent},
    { path: "consulter", component: ConsulterComponent}
];

