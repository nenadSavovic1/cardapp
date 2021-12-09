import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import isEmpty from 'lodash.isempty';
// import every  from 'lodash.every';
import values  from 'lodash.values';

import useStore from "../../stores/cardStore";
import { validate } from '../../utils';
import FormInput from "./FormInput";
import FormInfo from "./FormInfo";

const EditCreditCardForm = ({ toggleEditForm, cardId, cardNumber, cardBeholder, cardExp, cardCvc }) => {

  const editCard = useStore((state) => state.editCard);
  const deleteCard = useStore((state) => state.deleteCard);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      cardBeholder,
      cardNumber,
      cardExp,
      cardCvc,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      editCard(cardId, values);
      resetForm();
      toggleEditForm();
    },
  });

  const onDeleteCardClick = () => {
    deleteCard(cardId);
  }

  useEffect(() => {
    const { cardNumber } = formik.values;
    let cardNumberFormatted = cardNumber.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    formik.setFieldValue("cardNumber", cardNumberFormatted, false);
  },[formik.values.cardNumber])

  let btnDisabled = !(values(formik.errors).every(isEmpty));

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 mb-4 ">
      <span onClick={toggleEditForm} style={{float: "right", cursor: "pointer "}} className="text-black font-extrabold text-xl ">
        X
      </span>        
      <p className="text-black font-extrabold text-2xl mb-6 mt-6 ">Edit your card</p> 

      <FormInput 
        maxLength={40} 
        labelText="Name in card"
        id="cardBeholder" 
        name="cardBeholder" 
        type="text" 
        placeholder="Card holder"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.cardBeholder}
        error={formik.errors.cardBeholder} 
        touched={formik.touched.cardBeholder}
      />
      <FormInfo 
        error={formik.errors.cardBeholder} 
        touched={formik.touched.cardBeholder}
      />

      <FormInput 
        maxLength={19}
        labelText="Card number"
        id="cardNumber" 
        name="cardNumber" 
        type="text" 
        placeholder="0000 0000 0000 0000"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.cardNumber}
        error={formik.errors.cardNumber} 
        touched={formik.touched.cardNumber}
      />
      <FormInfo 
        error={formik.errors.cardNumber} 
        touched={formik.touched.cardNumber}
      />        

      <FormInput
        maxLength={5}
        labelText="Expiry date"
        id="cardExp" 
        name="cardExp" 
        type="text" 
        placeholder="00/00"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.cardExp}
        error={formik.errors.cardExp} 
        touched={formik.touched.cardExp}
      />
      <FormInfo 
        error={formik.errors.cardExp} 
        touched={formik.touched.cardExp}
      />        

      <FormInput 
        maxLength={3}
        labelText="CVC (Security code)"
        id="cardCvc" 
        name="cardCvc" 
        type="cardCvc" 
        placeholder="000"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.cardCvc}
        error={formik.errors.cardCvc} 
        touched={formik.touched.cardCvc}
      />
      <FormInfo 
        error={formik.errors.cardCvc} 
        touched={formik.touched.cardCvc}
      />    
      
      <div className="flex items-center flex-col justify-between ">
        <button 
          disabled={btnDisabled} 
          type="submit" 
          className={ btnDisabled ? 
            "mt-10 mb-10 w-full h-12 px-6 text-white transition-colors duration-150 bg-purple-200 rounded-full focus:shadow-outline hover:bg-purple-300 " 
            :
            "mt-10 mb-10 w-full h-12 px-6 text-white transition-colors duration-150 bg-purple-700 rounded-full focus:shadow-outline hover:bg-purple-800 "
          } 
        >
          Confirm
          </button>
        <button 
          onClick={onDeleteCardClick}
          className="w-full h-12 px-6 text-gray-300 duration-150 "
        >          
          Delete card
        </button>
      </div>

    </form>
  )
}

export default EditCreditCardForm;