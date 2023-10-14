import { useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import Classes from "../assets/Css/NavigationButton.module.css"
import SingleCard from "../Components/SingleCard";


const SingleProduct = () => { 
  const filterByid = useSelector((state)=>state.product.filterId)
  console.log(filterByid,"filteByid")
  const params = useParams()
  const ID= params.id
    console.log(params,"Params")
    console.log(ID,"params.id")
  const product = useSelector((state) => state.product.data);
  console.log( product,"product we will filter on")
const Filter = product.filter((product)=>product.id==ID)
console.log(Filter,"Filter we wil map on")

  return(
   
   <div className={Classes.singlePage}>
     {
      Filter.map((prod)=>( < SingleCard title={prod.title} image={prod.image} price={prod.price} prodId={prod.id} description={prod.description} />))
      }
    </div>
  )
}

export default SingleProduct
