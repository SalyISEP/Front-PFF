import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction.service';
import { TransactionRequest } from '../app.models';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {

  conForm: FormGroup= new FormGroup({
        montant: new FormControl('', [Validators.required]),
        quantite: new FormControl('', [Validators.required]),
        codeWoyofal: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required])
  })

  constructor(
    private transactionService: TransactionService,
    private Router: Router) {}

    // 
    // });

  transaction() {
    // Logique de soumission du formulaire
    console.log('form:', this.conForm.value);
    var montant = this.conForm.controls['montant'].value;
    var quantite = this.conForm.controls['quantite'].value;
    var codewoyofal = this.conForm.controls['code woyofal'].value;
    var date  = this.conForm.controls['date'].value;

    console.log('montant', montant);
    console.log('quantite', quantite);
    console.log('code woyofal', codewoyofal);
    console.log('date', date);

    const transactionRequest: TransactionRequest ={
      montant: montant,
      quantite: quantite,
      "code woyofal": codewoyofal, // correction ici, la clé doit correspondre à celle dans le formulaire
      date: date
    };
    this.transactionService.transaction(transactionRequest).subscribe({
      next:(notification) => {
        console.log("Notification", notification);

      },
      error:(err) => {
        console.error("erreur", err);

      },
      complete:()=>{
        console.log("Achat reussi");
        this.Router.navigate(["accueil"])
      }
    });
  }
}
