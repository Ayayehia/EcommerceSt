import DiscountPromoNav from "../Components/DiscountPromoNav"
import ImageSlider from "../Components/ImageSlider"
import NavigateButtons from "../Components/NavigateButtons"
import { Outlet, useLoaderData } from "react-router-dom"
import Classes from "../assets/Css/ImagePromo.module.css"
import { useSelector,useDispatch } from "react-redux";
import ProductCard from "../Components/ProductCard"
import Classestwo from "../assets/Css/ProductCard.module.css"
import { fetchProducts} from "../Redux/Slices/FilterProductSlice"; 
import Footer from "../Components/Footer"
import { useEffect } from "react"

const LandingPage = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    // Dispatch the async thunk action to fetch products when the component mounts
    dispatch(fetchProducts() );
   
  }, [dispatch]);

  const product = useSelector((state) => state.product.data);
  console.log(product,"product data used in landing page")
  const Loader=useLoaderData();
  const image= Loader[1]
  //Reusing an Image from the Loader
  return (
    <div>
      <DiscountPromoNav textOne={"50% OFF"} textTwo={"Free Shipping and Returns"} textThree={"Different Payment Methods"} style={"promoNav"}/>
      <ImageSlider/>
      <NavigateButtons/>
      <DiscountPromoNav textOne={"SALE 30%"} textTwo={"ON T-SHIRTS"} style={"smallPromoNav"}/>
      <img src={image} className={Classes.ImagePromo} />
      <DiscountPromoNav textOne={"CHECK OUT"} textTwo={"NEW SUMMER COLLECTION"}  style={"smallPromoNav"}/>
      <Outlet/>
      <div className={Classestwo.cardDesign}>
      {product.map((product) => (<div style={{margin:"2%"}}>
        <ProductCard style={"340px"}  prodId={product.id} title={product.title} description={product.description} price={product.price} image={product.image} /></div>
        ))}
        </div>
        <Footer/>
    </div>
  )
}

export default LandingPage
