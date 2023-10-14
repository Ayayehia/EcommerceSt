import { useDispatch } from "react-redux"
import Classes from "../assets/Css/WishListItems.module.css"
import { addItemToCart} from "../Redux/Slices/CartSlice";
import ClearIcon from '@mui/icons-material/Clear';
import { RemoveFromWishList } from "../Redux/Slices/WishListSlice";

const WishListItems = ({price,image,id,title}) => {
    
    const dispatch = useDispatch();
    
    const AddToCart = ()=>{
        dispatch( addItemToCart({id,price,title,image}))
    }
    const Delete =()=>{
        dispatch(RemoveFromWishList(id))
    }
  return (
    <>
    <div>
       
            <tr className={Classes.items}>
          
            <th> <ClearIcon onClick={Delete}/></th>
             <div className={Classes.imageContainer}>
            <th style={{width:"200px"}}> <img style={{width:"60%" , height:"76%"}} className={Classes.wishImage} src={image}/></th>
            </div>
            <div style={{gap:"5%"}}>
                <th> {title}</th>
                <th> ${price}</th>
                <th> In Stock</th>
                <th><button onClick={AddToCart}> Add To Cart</button></th>
                </div>
            </tr>
        <hr/>
    </div>
    </>
  )
}

export default WishListItems


