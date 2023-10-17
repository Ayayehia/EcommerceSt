import { useDispatch } from "react-redux"
import Classes from "../assets/Css/WishListItems.module.css"
import { addItemToCart} from "../Redux/Slices/CartSlice";
import ClearIcon from '@mui/icons-material/Clear';
import { RemoveFromWishList } from "../Redux/Slices/WishListSlice";
import React from "react";
const WishListItems = ({price,image,id,title}) => {
    const reducetitle = title.slice(0,18)
    const dispatch = useDispatch();
    
    const AddToCart = ()=>{
        dispatch( addItemToCart({id,price,title,image}))
    }
    const Delete =()=>{
        dispatch(RemoveFromWishList(id))
    }
  return (

    <>
    
            <tr className={Classes.items}>
             <div className={Classes.imageContainer}>
             <th> <ClearIcon onClick={Delete}/></th>
            <th className={Classes.image}> <img  className={Classes.wishImage} src={image}/></th>
            </div>
            <div style={{gap:"5%",display:"flex" , justifyContent:"space-between",width:"100%",padding:"5px",columnGap:"13%"}}>
                <th> {reducetitle}</th>
                <th> ${price}</th>
                <th> In Stock</th>
                <th><button onClick={AddToCart}> Add To Cart</button></th>
                </div>
            </tr>
        <hr/>
   
    </>
  )
}

export default WishListItems


