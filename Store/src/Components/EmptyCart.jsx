import Logo from "../assets/Images/emptyCart.jpg"

const EmptyCart = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h1 style={{color:"#757575"}}>Opps The Cart is Empty!</h1>
      <img style={{width:"60%"}} src={Logo}/>
    </div>
  )
}

export default EmptyCart
