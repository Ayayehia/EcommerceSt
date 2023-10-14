import { useDispatch, useSelector } from "react-redux";
import Classes from "../assets/Css/CartItem.module.css"
import { RemoveFromCart ,addItemToCart} from "../Redux/Slices/CartSlice";

const Style = {border:"solid 2px grey"}


const CartItem = ({price,quantity,title,image,id,totalprice}) => {

let totalPrice = totalprice.toFixed(2)
 const Dispatch =useDispatch();
  //Removing and adding to the Cart
 const Remove = ()=>{
    Dispatch(RemoveFromCart(id))
  }
  const addItemHandler = () => {
    Dispatch(
      addItemToCart({
        id,
        title,
        price,}));
  };
  

 return (
  <div > 
  <div className={Classes.total}> 
  <img src={image} style={{width:"20%",height:"15%"}}/>
  <span>{title}</span>
  <span>Total Amount</span>
  <span>${totalPrice}</span>
  <span>X{quantity}</span>
</div>
<div className={Classes.actions} style={{display:"flex",justifyContent:"flex-end"}}>
  <button onClick={Remove} style={Style} >-</button>
  <button onClick={addItemHandler} style={Style}>+</button>

</div>
<hr style={{color:"black",width:"100%"}}/>
    </div>   
  );

   
  
}

export default CartItem
