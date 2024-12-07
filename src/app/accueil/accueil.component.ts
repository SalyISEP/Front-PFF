import { TransactionService } from './../services/transaction.service';
import { TransactionRequest, TransactionReponse } from './../app.models';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../services/login.service';
import { LoginRequest } from '../app.models';  // Assurez-vous que le modèle est importé correctement

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  conForm: FormGroup;
  transactionService: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService  // Injection du service
  ) {
    // Initialisation du formulaire
    this.conForm = this.fb.group({
      montant: ['', [Validators.required, Validators.min(1)]],
      quantite: ['', [Validators.required, Validators.min(1)]],
      codeWoyofal: ['', [Validators.required, Validators.minLength(5)]],
      date: ['', [Validators.required]],
    });
  }

  transaction() {
    // Vérifier si le formulaire est valide
    if (this.conForm.invalid) {
      console.log('Formulaire invalide');
      return;
    }

    // Extraire les valeurs du formulaire
    const montant = this.conForm.controls['montant'].value;
    const quantite = this.conForm.controls['quantite'].value;
    const codeWoyofal = this.conForm.controls['codeWoyofal'].value;
    const date = this.conForm.controls['date'].value;

    console.log('montant', montant);
    console.log('quantite', quantite);
    console.log('code woyofal', codeWoyofal);
    console.log('date', date);

    // Créer l'objet loginRequest
    const transactionRequest: TransactionRequest = {
      "montant": montant,
      "quantite": quantite,
      "code woyofal": codeWoyofal,
      "date": date
    };

    // Appel à votre service de connexion
    this.transactionService.createTransaction(transactionRequest).subscribe({
      next: (transactionReponse: any) => {
        console.log("Réponse de la transaction", transactionReponse);
      },
      error: (err: any) => {
        console.log("erreur", err);
      },
      complete: () => {
        console.log("Transaction reussi réussie");
        this.router.navigate(["accueil"]);  // Redirection après succès
      }
    });
  }
}
