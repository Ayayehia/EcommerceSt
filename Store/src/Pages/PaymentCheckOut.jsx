import Cards from 'react-credit-cards-2';
import React, { useState } from 'react';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import Classes from "../assets/Css/PaymentCheckOut.module.css"
import { useDispatch,useSelector } from 'react-redux';
import { Validate } from '../Redux/Slices/CheckOutSlice';

const PaymentCheckOut = () => {
  const [Values, SetValues] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });
const dispatch = useDispatch();
const error = useSelector((state)=>state.payment.errors)
const Value = useSelector((state)=>state.payment.value)
const noErrors = error.length === 0 
//Debugging
console.log(noErrors,"no Errors")
console.log(Value,"Value coming from the Slice")
console.log(Values,"Values of the input field")
console.log(error,"Error Message coming from Slice")
//Debugging
  const ValidateForm =(e)=>{
    e.preventDefault()
    dispatch(Validate({name: Values.name,
      number: Values.number,
      expiry: Values.expiry,
      cvc: Values.cvc,}))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    SetValues({
      ...Values,
      [name]: value,
    });
  };

  const handleInputFocus = (e) => {
    SetValues({
      ...Values,
      focus: e.target.name,
    });
  };

  return (
    <div className={Classes.containerOutline}>
    <div className={Classes.container}>
      <Cards
        number={Values.number}
        expiry={Values.expiry}
        cvc={Values.cvc}
        name={Values.name}
        focused={Values.focus}
      />
      <form className={Classes.form} onSubmit={ValidateForm}>
        <input
          type="text"
          name="name"
          placeholder="NAME ON CARD"
          value={Values.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
         { error&& <p className={Classes.error}>{error.name}</p>}
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={Values.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
         { error&& <p className={Classes.error}>{error.number}</p>}
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={Values.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
         { error&& <p className={Classes.error}>{error.expiry}</p>}
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={Values.cvc}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
         { error&& <p className={Classes.error}>{error.cvc}</p>}
         <button onClick={ValidateForm} className={Classes.CheckOutButton}>CHECK OUT</button>
      </form>
      {noErrors && <p className={Classes.error}>Validation Done</p>}

    </div>
    </div>
  );
};

export default PaymentCheckOut;




