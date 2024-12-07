export interface LoginRequest{
  "email": string,
  "password": string
}

export interface LoginReponse{
  "token": string
}

export interface TransactionRequest{
  "montant": number,
  "quantite": number,
  "code woyofal": number,
  "date": string
}

export interface TransactionReponse{

}

export interface DemandeRequest{
  "typedecompteur": string,
  "description": string,
  "datedepaiement": Date,
  "adresse": string
}

export interface DemandeReponse{

}
