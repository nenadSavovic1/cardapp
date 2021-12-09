import React from 'react';
import classNames from 'classnames';

import { cardNumberFormatter } from '../../utils';
import editIcon from '../../images/edit-icon.svg';

const CardLayout = ({ cardNumber, scaled, toggleEditForm, cardLogo, cardBeholder, cardExp, cardCvc, cardColor }) => {
  return (
    <>
      <div className={classNames("my-card-layout h-48 mb-4 rounded-lg ", {"transform scale-75 mt-20 " : scaled})} style={{ backgroundColor: cardColor }}>
        <div className="w-72 flex flex-col p-3 rounded-lg ">
          <div className="flex flex-row m-2">
            <span className="w-16 h-16 flex-grow ">
              <img src={cardLogo} alt="card logo " />
            </span>
            <span className="w-16 h-16 text-white text-size font-bold text-right ">
              <p className="text-xs text-white ml-1 ">CVC</p>
              {cardCvc}
            </span>
            <span className="w-16 h-16 text-white font-bold text-right ">
              <p className="text-xs text-white ml-1 ">EXPIRES</p> 
              {cardExp}
            </span>
          </div>

          <div className="m-2 text-white font-bold ">{cardBeholder}</div>
        
          <div className="flex flex-row m-2 ">
            <span className="flex-grow text-gray-200 text-base font-mono">{cardNumberFormatter(cardNumber)}</span>
            <span>
              <img 
                onClick={toggleEditForm}
                className={classNames("cursor-pointer ", { "pointer-events-none ": scaled })} 
                src={editIcon} 
                alt="edit" 
              />
            </span>
          </div>
      </div>
    </div>
    </>
  )
}

export default CardLayout