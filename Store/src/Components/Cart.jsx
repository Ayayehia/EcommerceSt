import CartItem from "./CartItem"
import {  useSelector } from "react-redux"
import classes from "../assets/Css/Cart.module.css"
import Modal from "../Ui/Card"
import ButtonCart from "./ButtonCart"
import { useState } from "react"
import EmptyCart from "./EmptyCart"

const Cart = ({toggle}) => {

  const [close,SetClose]=useState(false)
   const Data = useSelector((state)=>state.cart.items)
     const CloseCart =()=>{
      SetClose((prev)=>!prev)
    }
const cartFull = Data.length > 0
const CartData = Data.map((prod)=>(<CartItem key={prod.id}  totalprice={prod.totalPrice} image={prod.image} totalQuantity={prod.quantity} price={prod.price} quantity={prod.quantity} title={prod.name} id={prod.id}/>))
//  Debugging
 console.log(close,"close state in th Cart component")
 console.log(toggle,"the Toggle state in Cart")
 console.log( Data,"DatainCart")
 //  Debugging
 return (
    <>
   {!close && <Modal onClick={CloseCart}>
    <div className={classes.cart}>
    
      {toggle && cartFull? CartData :(<EmptyCart/>)}
    </div> 
    <ButtonCart OnClose={CloseCart} />
    </Modal>}</>
  )
}

export default Cart
