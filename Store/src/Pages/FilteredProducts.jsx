import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts} from "../Redux/Slices/FilterProductSlice"; 
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard"
import Classes from "../assets/Css/ProductCard.module.css"

function FilteredProducts() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filteredProducts);
  const product = useSelector((state) => state.product.data);
  const { type } = useParams();
  const filter =  product.filter((item)=>item.category===type)
//Debugging
console.log(filter,"filtering logic in the component it self")
console.log(product,"Data used before filtering")
console.log(products,"products after Filtered Products")
//Debugging

//first time empty then fetch the data
  useEffect(() => {
    // Dispatch the async thunk action to fetch products when the component mounts
    dispatch(fetchProducts() );
   
  }, [dispatch]);

  return (
    <>
    <div>
      <h1 style={{fontSize:" 2.625rem",fontFamily:"barlow",color:" rgba(0, 0, 0, 0.6)",margin:"2%"}}> {type}</h1>
      <ul>
        <div className={Classes.cardDesign} >
 {filter.map((product) => (<div style={{margin:"2%"}}>
        <ProductCard style={"440px"}  prodId={product.id} title={product.title} description={product.description} price={product.price} image={product.image} /></div>
        ))}
</div>
      </ul>
    </div>
    
    </>
  );
}

export default FilteredProducts;
