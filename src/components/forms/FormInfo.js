import React from 'react';

import errorIcon from '../../images/form-error.svg';
import successIcon from '../../images/form-success.svg';

const FormInfo = ({ error, touched }) => {

  let errorVisible = error && touched ? "opacity-1" : "opacity-0";
  let successVisible = !error && touched ? "opacity-1" : "opacity-0";
    
  return ( 
    <>
      <div className="h-4">
        <div className={"flex justify-end items-start  " + errorVisible }>
          <span
            className="flex "
            style={{marginTop: "-25px"}}
          >
            <img className={errorVisible} src={errorIcon} alt="errorIcon"/> 
          </span>
        </div>  
        <div className={"text-red-500 text-xs " + errorVisible}>{error}</div>
      </div>
      <div className={"flex justify-end items-start  " + successVisible}>
        <span
          className="flex "
          style={{marginTop: "-37px"}}
        >
          <img className={successVisible} src={successIcon} alt="errorIcon"/> 
        </span>
      </div>      
    </>  
  )

}

export default FormInfo;
