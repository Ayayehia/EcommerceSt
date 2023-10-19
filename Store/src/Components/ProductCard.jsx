import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link, useParams } from 'react-router-dom';
import Classes from "../assets/Css/NavigationButton.module.css"
import { useDispatch } from 'react-redux';
import { filterById } from '../Redux/Slices/FilterProductSlice';
import {addItemToCart} from "../Redux/Slices/CartSlice"
import { addWishList } from '../Redux/Slices/WishListSlice';
import Classe from "../assets/Css/ProductCard.module.css"
const ProductCard = ({title,price,description,image,prodId,style,styleTwo}) => {
    //height of image kant 140
   // card max width 345
   const desc =description.slice(0,100)
   const titleReduce =title.slice(0,40)
   // the info of describtion prop coming from the api are too big to be put in my cards
  const url = useParams();
  const type=url.type
  const Dispatch = useDispatch()
 
  const addToWish=()=>{
  Dispatch(addWishList({id:prodId,price,title,image}))
 }
  const FilterById =()=>{
    Dispatch(filterById(prodId))
  }

  const AddItem=()=>{
    Dispatch(addItemToCart({id:prodId,price,title,image}))
  }
   //Debugging
  console.log( type,"using use params")
  console.log(prodId,"id")
    //Debugging
  
    

  return (
    <Card key={prodId} sx={{ width:style||styleTwo,height:550,margin:"5%",padding:"4%"}} >  

     <Link to={"/filteredProducts/"+type+"/"+prodId} style={{textDecoration:"none"}}>

      <CardActionArea onClick={FilterById}>
        <CardMedia
          component="img"
          height="240"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{ color: 'black' }}  gutterBottom variant="h5" component="div">
           {titleReduce}.
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {desc}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{marginTop:"1%"}}>
         Price: $ {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions className={Classe.cardbtn} >
       
        <Link ><FavoriteBorderIcon className={Classes.fav}  onClick={addToWish}/></Link>
        <Button onClick={AddItem} size="large" variant="outlined" className={Classes.buttonStyles}> Add To Cart</Button>
       
       
      </CardActions>
    </Card>
   
  )
}

export default ProductCard



