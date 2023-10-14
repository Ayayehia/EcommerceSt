import EmptyWishList from "../assets/Images/EmptyCart2.jpg"
import Classes from "../assets/Css/EmptyWishList.module.css"
import {useNavigate} from "react-router-dom"

const NOWishList = () => {
    const Navigate = useNavigate()
  
    return (
    
    <div className={ Classes.container}>
    <div className={ Classes.title}>
      <h1>It seems Nothing in here.</h1>
      <h1> make a wish!!</h1>
    </div>
    <div>
        <img src={EmptyWishList}/>
    </div>
    <div>
     <button onClick={() => Navigate("/") }  className={Classes.shoppingbtn}>START SHOPPING</button>
    </div>
    </div>
  
  )
}

export default NOWishList
