import React, { useState } from 'react';
import classNames from 'classnames';

import CardLayout from './CardLayout';
import EditCreditCardForm from "../forms/EditCreditCardForm";
import visaLogo from '../../images/visa-logo.svg';
import masterCardLogo from '../../images/mastercard-logo.svg';

const CreditCard = ({ cardId, cardNumber, cardBeholder,  cardType, cardExp, cardCvc, cardColor }) => {

  const toggleEditForm = () => {
    setEditFormOpen(!editFormOpen);
  }
  const [editFormOpen, setEditFormOpen] = useState(false);

  const cardLogo = cardType === 'visa' ? visaLogo : masterCardLogo;

  return (
    <>
    <CardLayout 
      cardColor={cardColor}
      cardLogo={cardLogo}
      cardCvc={cardCvc}
      cardExp={cardExp}
      cardBeholder={cardBeholder}
      cardNumber={cardNumber}
      toggleEditForm={toggleEditForm}
    />

    <div  className={classNames("custom-w bg-white", { "slider ModalOpen fade ": editFormOpen , "slider closed fadeOut" : !editFormOpen }  ) }>
      <CardLayout
        scaled={true}
        cardColor={cardColor}
        cardLogo={cardLogo}
        cardCvc={cardCvc}
        cardExp={cardExp}
        cardBeholder={cardBeholder}
        cardNumber={cardNumber}
        toggleEditForm={toggleEditForm}
      />

      <EditCreditCardForm 
        toggleEditForm={toggleEditForm}
        cardId={cardId}
        cardNumber={cardNumber}
        cardBeholder={cardBeholder}
        cardExp={cardExp}
        cardCvc={cardCvc}
      />
    </div>
    </>
  )
}

export default CreditCard