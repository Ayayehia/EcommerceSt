import Classes from "../assets/Css/CartItem.module.css"



const ButtonCart = ({OnClose}) => {

  
  return (
    <div className={Classes.actions}> 
    <button onClick={OnClose}  className={Classes["button--alt"]}  >Close</button>
   <a href="payment">
    <button  className={Classes.button}>Order</button>
    </a>
  </div>
  )
}

export default ButtonCart
