import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import isEmpty from 'lodash.isempty';
import every  from 'lodash.every';
import values  from 'lodash.values';


import useStore from '../../stores/cardStore';
import { validate } from '../../utils';
import FormInput from './FormInput';
import FormInfo from './FormInfo';

const AddCreditCardForm = () => {

  const [toggleForm, setToggleForm] = useState(false);
  const addCard = useStore((state) => state.addCard);
  
  const formik = useFormik({
    initialValues: {
      cardBeholder: '',
      cardNumber: '',
      cardExp: '',
      cardCvc: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      console.log('XXXX: ', formik);
      addCard(values);
      setToggleForm(!toggleForm);
      resetForm();
    },
  });

  const closeForm = () => {
    setToggleForm(!toggleForm);
    formik.resetForm();
  }

  useEffect(() => {
    const { cardNumber } = formik.values;
    let cardNumberFormatted = cardNumber.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    formik.setFieldValue("cardNumber", cardNumberFormatted, false);
  },[formik.values.cardNumber])

  let sliderClass = toggleForm ? "slider ModalOpen fade" : "slider closed fadeOut";
  let btnEnabled = !(values(formik.errors).every(isEmpty) && formik.dirty)

  if (toggleForm) { 
    return (
      <div className={`custom-w ${sliderClass}`}>
        <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
          
          <span 
            style={{float: "right", cursor: "pointer"}} 
            className="text-black font-extrabold text-xl" 
            onClick={closeForm} 
          >
            X
          </span>        
          <p className="text-black font-extrabold text-2xl mb-6 mt-6 ">Add your card details</p> 

          <FormInput
            maxLength={40} 
            labelText="Name in card"
            id="cardBeholder" 
            name="cardBeholder" 
            type="text" 
            placeholder="John Doe"
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
            type="text" 
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
          
          <div className="flex items-center justify-between ">
            <button 
              disabled={btnEnabled} 
              type="submit" 
              className={ btnEnabled ? 
                "mt-10 mb-10 w-full h-12 px-6 text-white transition-colors duration-150 bg-purple-200 rounded-full focus:shadow-outline hover:bg-purple-300 " 
                :
                "mt-10 mb-10 w-full h-12 px-6 text-white transition-colors duration-150 bg-purple-700 rounded-full focus:shadow-outline hover:bg-purple-800 "
              } 
            >
              Confirm
            </button>
          </div>
      
        </form>
      </div>
    )
  } else {
      return (
        <button onClick={() => {
          setToggleForm(!toggleForm)}} 
          className="mt-10 mb-10 w-full h-12 px-6 text-indigo-100 transition-colors duration-150 bg-purple-700 rounded-full focus:shadow-outline hover:bg-purple-800"
        >
          Add new card
        </button>
      )
    } 
}

export default AddCreditCardForm;
