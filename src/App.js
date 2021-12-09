import React, { useEffect } from 'react';

import useStore from "./stores/cardStore";
import { getCards } from './utils';
import CreditCard from './components/card/CreditCard';
import AddCreditCardForm from './components/forms/AddCreditCardForm';
import casumoLogo from './images/casumo-logo.svg'

const Loading = () => (
  <div className="border bg-white-100 shadow rounded-md p-12 max-w-sm w-full mx-auto">
    <div className="animate-pulse flex space-x-6">
      <div className="flex-1 space-y-4 py-2">
        <div className="h-4 bg-purple-300 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-purple-300 rounded"></div>
          <div className="h-4 bg-purple-300 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {

  const setCards = useStore((state) => state.setCards);
  const creditCards = useStore((state) => state.creditCards);

  useEffect(() => {
    getCards.then(res => {setCards(res)}).catch(error => {console.log(error)})
  },[])
  
  return (
    <div className="h-2/3 mt-20 flex justify-center items-center overflow-hidden ">
      <div className="custom-w rounded overflow-auto shadow-lg p-4 bg-gray-100 ">
        <img src={casumoLogo} className="mb-2	" alt="company logo" />
        <p className="text-purple-700 font-extrabold text-3xl ">Your cards</p>
        <p className="mb-16 text-xs text-gray-600 ">Add, edit or delete your cards at anytime</p>
        {
          creditCards.length ? 
          creditCards.map(({ cardId, cardColor, cardNumber, cardBeholder,  cardType, cardExp, cardCvc }) => 
            <CreditCard 
              key={cardId} 
              cardId={cardId} 
              cardNumber={cardNumber} 
              cardBeholder={cardBeholder}  
              cardType={cardType} 
              cardExp={cardExp} 
              cardCvc={cardCvc} 
              cardColor={cardColor}
            /> 
          ) : <Loading />
        }
        <AddCreditCardForm  />
      </div>
    </div>

  );
}

export default App;
