import { DemandeReponse, DemandeRequest } from './../app.models';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeCompteurService } from './../services/demande-compteur.service'; 
@Component({
  selector: 'app-demande-compteur',
  templateUrl: './demande-compteur.component.html',
  standalone:true,
  imports:[
    ReactiveFormsModule
  ],
  styleUrls: ['./demande-compteur.component.scss']
})
export class DemandeCompteurComponent {

  conForm: FormGroup = new FormGroup({
    typeDeCompteur: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    dateDePaiement: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required])
  });

  // errMessage= '';

  // conForm: FormGroup= new FormGroup({
  //   typedecompteur: new FormControl('', [Validators.required]),
  //   description: new FormControl('', [Validators.required]),
  //   datededemande: new FormControl('', [Validators.required]),
  //   adresse: new FormControl('', [Validators.required])
  // })

  constructor(
    private demandeCompteurService: DemandeCompteurService, // Assurez-vous d'injecter le service
    private router: Router
  ) {}

  // Méthode pour traiter le formulaire
  demande(){
    alert("TOTO")
    console.log('form:', this.conForm.value); // Vous pouvez envoyer ces données à votre service pour traitement
    var typedecompteur = this.conForm.controls['typeDeCompteur'].value;
    var description = this.conForm.controls['description'].value;
    var datedepaiement = this.conForm.controls['dateDePaiement'].value;
    var adresse = this.conForm.controls['adresse'].value;
    console.log('typeDeCompteur', typedecompteur);
    console.log('description', description);
    console.log('datedepaiement', datedepaiement);
    console.log('adresse', adresse);
    const demandeRequest: DemandeRequest ={
      "typedecompteur": typedecompteur,
      "description": description,
      "datedepaiement": datedepaiement,
      "adresse": adresse
    }

    // service pour soumettre la demande
    this.demandeCompteurService.demande(demandeRequest).subscribe({
      next: (demandeReponse) => {
        console.log('Demande soumise avec succès:', demandeReponse);
        // Vous pouvez rediriger après la soumission
        this.router.navigate(['/accueil']);
      },
      error:(err) => {
        console.log("erreur", err);

      },
      complete:()=>{
        console.log("Authentification reussi");
        this.router.navigate([""])
      }
    });
  }
}
