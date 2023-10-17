import { createSlice} from "@reduxjs/toolkit";

const initialState ={ items:[],totalQuantity:0}

const WishListSlice =  createSlice({
    name:"wishlist",
    initialState:initialState,
    reducers:{
        addWishList(state,action){
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
               return   existingItem.quantity--;      
              
            //    quantity-- 
            
            }
        },
        RemoveFromWishList(state,action){
         const ID = action.payload;
         const exsistingId= state.items.find((prod)=>prod.id===ID);
         if(exsistingId.quantity==1){
            state.items=state.items.filter((prod)=>prod.id!==ID)
            state.totalQuantity--;
         }else{
            existingItem.quantity--;
         }
        }
    }
})



export const { addWishList,RemoveFromWishList} = WishListSlice.actions;
export default WishListSlice.reducer;