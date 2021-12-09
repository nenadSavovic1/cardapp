import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

import { lightColor, darkColor, visa, masterCard } from '../utils/constants';

let cardStore = (set) => (
  {
    creditCards: [],
    setCards: (cards) => 
      set( state => ({
        creditCards: cards,
    })),
    addCard: (card) =>
      set((state) => ({
        creditCards: [
        { 
          cardColor: state.creditCards.length % 2 === 0 ? lightColor : darkColor,
          cardType: state.creditCards.length % 2 === 0 ? masterCard : visa,
          cardBeholder: card.cardBeholder, 
          cardId: uuidv4(),
          cardNumber: card.cardNumber.replace(/\s/g, ''), 
          cardExp: card.cardExp,  
          cardCvc: card.cardCvc 
        },
          ...state.creditCards,
      ]})),
    deleteCard: (cardId) =>
      set((state) => ({
        creditCards: state.creditCards.filter((card) => card.cardId !== cardId),
      })),
    editCard: (cardId, newValues) =>
      set((state) => ({
        creditCards: state.creditCards.map((card) =>
          card.cardId === cardId ? 
            { ...card, cardBeholder: newValues.cardBeholder, cardNumber: newValues.cardNumber, cardExp: newValues.cardExp, cardCvc: newValues.cardCvc } 
            : card
        )
      })),
  }
);

cardStore = devtools(cardStore);
const useStore = create(cardStore);

export default useStore;

