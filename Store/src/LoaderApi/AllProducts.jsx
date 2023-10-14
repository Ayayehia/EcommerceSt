import axios from "axios"
import { useEffect } from "react"
import { data } from "../Redux/Slices/FilterProductSlice";
import { useDispatch } from "react-redux";
// const AllProducts = () => {
//     useEffect(async ()=>{
//      return await axios.get("https://fakestoreapi.com/products")
//     .then((res)=>console.log(res.data))
//     .catch((err)=>console.log(err.message))
//      },[])

// }


//latest update
const AllProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return  response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; 
    }
  };

export default AllProducts
//latest update

// category
// description
// id
// image
// price
// rating
// title



