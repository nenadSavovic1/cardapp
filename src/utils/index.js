import { formErrorValues, nameRegex, cardRegex, cvcRegex, cardsArray } from './constants';
var creditCardValidateExpiry = require('credit-card-expiry-validator');

// const validateFullName = (inputValue) => {
//   const nameRegex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
//   if (!inputValue) {
//     return formErrorValues.fullNameError;
//   } else if (!nameRegex.test(inputValue)) {
//     return formErrorValues.fullNameError;
//   } else return "";
// }

// const validateCardNumber = (cardNumber) => {
//   if (!cardNumber || !cardRegex.test(cardNumber)) {
//     return formErrorValues.cardNumberError;
//   } else return "";
// }

// const validateCardExpiry = (cardExp) => {
//   if (!cardExp || cardExp.length > 5 || creditCardValidateExpiry.isExpiryInvalid(cardExp)) {
//     return formErrorValues.cardExpiryError;
//   } else return "";
// }

// const validateCardCVC = (cardCvc) => {
//   const cvcRegex = /^[0-9]{3,4}$/;
//   if (!cardCvc || !cvcRegex.test(cardCvc)) {
//     return formErrorValues.cardCvcError;
//   } else return ""
// }

// export const getCards = () => {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve(cardsArray);
//     }, 500);
// });
// }

export const getCards = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(cardsArray);
  }, 1000);
});

export const validate = values => {
  const errors = {};

  if (!values.cardBeholder) {
    errors.cardBeholder = formErrorValues.fullNameError;
  } else if (!nameRegex.test(values.cardBeholder)) {
    errors.cardBeholder = formErrorValues.fullNameError;
  }

  if (!values.cardNumber) {
    errors.cardNumber = formErrorValues.cardNumberError;
  } else if (!cardRegex.test(values.cardNumber)) {
    errors.cardNumber = formErrorValues.cardNumberError;
  } 

  if (!values.cardExp) {
    errors.cardExp = formErrorValues.cardExpiryError;
  } else if (creditCardValidateExpiry.isExpiryInvalid(values.cardExp)) {
    errors.cardExp = formErrorValues.cardExpiryError;
  }

  if (!values.cardCvc) {
    errors.cardCvc = formErrorValues.cardCvcError;
  } else if (!cvcRegex.test(values.cardCvc)) {
    errors.cardCvc = formErrorValues.cardCvcError;
  }
  
  return errors;
};

export const cardNumberFormatter = (cardNumber) => {
  return cardNumber.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
} 


