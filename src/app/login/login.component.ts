import { routes } from './../app.routes';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest, LoginReponse } from './../app.models';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:true,
  styleUrls: ['./login.component.scss'],
  imports: [ ReactiveFormsModule],
})
export class LoginComponent  {


  conForm: FormGroup= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  errMessage= '';

  constructor(
    private loginService: LoginService,
    private router: Router) {}

    // Logique de soumission du formulaire
  login() {
    console.log('form:', this.conForm.value);
    var email = this.conForm.controls['email'].value;
    var password = this.conForm.controls['password'].value;
    console.log('email', email);
    console.log('password', password);
    const loginRequest: LoginRequest ={
      "email": email,
      "password": password
    }

    //service
    this.loginService.login(loginRequest).subscribe({
      next:(loginReponse) => {
        console.log("token", loginReponse.token);

      },
      error:(err) => {
        console.log("erreur", err);

      },
      complete:()=>{
        console.log("Authentification reussi");
        this.router.navigate(["accueil"])
      }
    })
  }
}
