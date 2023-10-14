import { createSlice} from "@reduxjs/toolkit";

const initialState ={ items:[],totalQuantity:0}
const CartSlice =  createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addItemToCart(state,action){
          const  newItems = action.payload;
          const  existingItem=state.items.find((prod)=>prod.id=== newItems.id);
           state. totalQuantity++
            if(!existingItem){
               state.items.push({
                    id: newItems.id,
                    name: newItems.title,
                    price: newItems.price,
                    quantity: 1,
                    totalPrice: newItems.price,
                    image:newItems.image
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice+ newItems.price
                existingItem.totalQuantity= existingItem.totalQuantity+newItems. quantity
            }
        },
        RemoveFromCart(state,action){
         const ID = action.payload;
         const exsistingId= state.items.find((prod)=>prod.id===ID);
         state.totalQuantity--;
         if(exsistingId.quantity==1){
            state.items=state.items.filter((prod)=>prod.id!==ID)
         }else{
            exsistingId.quantity--;
          exsistingId.totalPrice=exsistingId.totalPrice-exsistingId.price;
       
         }
        },
   InitializeCart(state,action){
    state.items = action.payload.Data;
    state.totalQuantity=action.payload.totalQuantity
   
   }
    }
})



export const {addItemToCart,RemoveFromCart,InitializeCart} = CartSlice.actions;
export default CartSlice.reducer;