import {createSlice} from "@reduxjs/toolkit"
 
const initialState={
    errors:{name:"",
  number:"",
expiry:"",
cvc:""},
    value:{}
    
}
// const numberValidation = number.length!==10

const CheckOutSlice  = createSlice({
    name:"payment",
    initialState: initialState,
    reducers:{
        Validate(state,action){
     const { name, number, expiry, cvc } = action.payload;
     const numberValidation = number.length!==16 
     const cvcValidation = /^\d{3}$/.test(cvc);
     const expiryValidation = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
     const nameValidation = /^[A-Za-z\s]+$/.test(name);
     
     state.errors.name = name.length === 0 ? "Name is required" : nameValidation ? "" : "Name shouldn't contain numbers";
     state.errors.number= numberValidation ?"Card Number should be 16 charcaters":"";
     state.errors.expiry = expiryValidation ? "" : "Enter a Valid Expiry Date";
     state.errors.cvc = cvcValidation ? "" : "CVC is required";
    }}
})

export const { Validate} = CheckOutSlice.actions
export  default CheckOutSlice.reducer

