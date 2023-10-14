import { Link} from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button, CardActions } from '@mui/material';
import Classes from "../assets/Css/NavigationButton.module.css"
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../Redux/Slices/CartSlice';
import { addWishList } from "../Redux/Slices/WishListSlice";
const SingleCard = ({title,price,description,image,prodId}) => {
   const desc =description.slice(0,100)
const dispatch =useDispatch();
const AddToCart =()=>{
  dispatch(addItemToCart({id:prodId,price,title,image}))
}

const Favorite = ()=>{
  dispatch(addWishList({id:prodId,price,title,image}))
}
  return (
    <div style={{display:"flex",margin:"10%"}} key={prodId}>
      <img style={{borderRadius:"6px",width:"50%"}} src={image}/>
      <div style={{display:"flex",flexDirection:"column",margin:"5%"}}>
        <h1>{title}</h1>
        <h2 style={{color:" rgba(0, 0, 0, 0.6)"}}>{desc}</h2>
        <p>{price}$</p>
        <CardActions style={{display:"flex",justifyContent:"space-around",alignItems: "center" ,margin:"9% 4% 9% 4%"}}>
       
       <Link><FavoriteBorderIcon onClick={Favorite}/></Link>
       <Button onClick={AddToCart} size="large" variant="outlined" className={Classes.buttonStyles}> Add To Cart</Button>
      
      
     </CardActions>
      </div>
     
    </div>
  )
}

export default SingleCard
