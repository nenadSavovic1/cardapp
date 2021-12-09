import React from 'react';
import classNames from 'classnames';

const FormInput = ({ labelText, placeholder, id, name, type, maxLength, handleChange, handleBlur, value, error, touched }) => {
  
  return (
    <div className="mt-4">
      
      <label htmlFor="cardBeholder" className="block text-xs text-black mb-2 " >
        {labelText}
      </label>

      <input 
        maxLength={maxLength}
        className={classNames("appearance-none border-b-2 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ", {"border-green-500 text-green-500 ": !error && touched}, { "border-red-500 text-red-500 ": error && touched } )}
        id={id} 
        name={name} 
        type={type} 
        placeholder={placeholder  }
        onChange={handleChange}
        onBlur={handleBlur}
        value={value} 
      />

    </div>
  );
}

export default FormInput;
