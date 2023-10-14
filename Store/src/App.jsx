import LandingPage from "./Pages/LandingPage"
import WishList from "./Pages/WishList";
import loaderImage from "./LoaderApi/ImageSliderLoader"
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import FilteredProducts from "./Pages/FilteredProducts";
import SingleProduct from "./Pages/SingleProduct";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import {  useState} from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import FirebaseDataSync from "./LoaderApi/FirebaseDataSync";
import PaymentCheckOut from "./Pages/PaymentCheckOut";


function App() {


   const [toggle,SetToggle]=useState(false)
   const onToggle = ()=>{
      SetToggle((prev)=>!prev)
     }
console.log(toggle,"Toggle state in the app component")
 
  const router = createBrowserRouter([
   {path:"/",element:<Header toggle={onToggle} />,
   children:[ { 
    index:true, 
   element:  <LandingPage/>,
   loader:loaderImage },

  { path: "/wishlist",
   element:  <WishList/>},
 
   
{
 path:"/filteredProducts/:type",
 element:< FilteredProducts/>,

}
,
{
   path:"/filteredProducts/:type/:id",
   element:< SingleProduct/>,
  
  },
  {
   path:"/payment",
   element:<PaymentCheckOut/>,
  }, 
  
]}

  ]);

  return (
   <>
      <RouterProvider router={router}/>
      {toggle && (<Cart toggle={toggle} />)}
      
     <FirebaseDataSync/>
      </>
  )
}

export default App



//Firebase Configuration


const firebaseConfig = {
  apiKey: "AIzaSyBkOyVrl4wkEWXsgJgXeYrhok3ENZVN8qY",
  authDomain: "cart-41e43.firebaseapp.com",
  databaseURL: "https://cart-41e43-default-rtdb.firebaseio.com",
  projectId: "cart-41e43",
  storageBucket: "cart-41e43.appspot.com",
  messagingSenderId: "519696442290",
  appId: "1:519696442290:web:b7cddf7d5af4953254faab",
  measurementId: "G-Y9H1Y6SKGF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
