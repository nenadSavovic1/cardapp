import { v4 as uuidv4 } from 'uuid';

export const formErrorValues = {
  fullNameError: "Enter valid name",
  cardNumberError: "Please enter a valid credit card number", 
  cardExpiryError: "Please enter a valid expiry date",
  cardCvcError: "Please enter a valid security code",
}

export const nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
export const cardRegex =  /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/;
export const cvcRegex = /^[0-9]{3,4}$/;

export const lightColor = "#40CAC8";
export const darkColor = "#38048F"; 

export const visa = 'visa';
export const masterCard = 'master'

export const cardsArray =  [
  {cardId: uuidv4(), cardColor: lightColor, cardNumber:"1234567891230000", cardBeholder: "Petar Petrovic", cardType: visa, cardExp:"12/24", cardCvc: "341"},
  {cardId: uuidv4(), cardColor: darkColor, cardNumber:"1234567843210000", cardBeholder: "Mark Johnson", cardType: masterCard, cardExp:"12/22", cardCvc: "511"},
]