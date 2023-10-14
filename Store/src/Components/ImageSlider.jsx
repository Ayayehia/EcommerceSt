import { Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { useEffect,useState } from 'react';
import Classes from "../assets/Css/ImageSlider.module.css"
import { useLoaderData } from 'react-router-dom';

const ImageSlider = () => {
const LoaderData = useLoaderData();
//using the loader Hook to fetch the Data from the loader and save it in the state
const[sliderData,SetSliderData]=useState([]);

useEffect(()=>SetSliderData(LoaderData),[])

  return (
    <div >
       <Carousel >
    {sliderData.map((img)=>( <Paper  key={img}>
      <Typography>{<img className={Classes.imgSlider} src={img} />}</Typography>
    </Paper>))
}
  </Carousel>
    </div>
  )
}

export default ImageSlider








// export const loader =()=>{
//     const api = ' https://fakestoreapi.com/products?limit=5'
//     axios.get(api)
//     .then(res=>{ const products = res.data;
//         const images= products.map((img)=>img.image);
//        const allImages=[].concat(...images);
//        SetSliderData(allImages)
//        })
//     .catch(err=>console.log(err.message))
// }


//json Data Api
//................Disregard for bad Quality Photos ...........................
//  const api = 'https://dummyjson.com/products/search?q=phone'
// const apiTwo ='https://dummyjson.com/products/category/smartphones'
//json Data Api

    // useEffect(()=>{
    //     const api = 'https://dummyjson.com/products/category/smartphones'
    //     //using variable because useEffect dont accept a promise
    //     axios.get(api)
    //     .then(res=>{ const products = res.data.products;
    //         const images = products.map((product) => product.images[0]);
    //         const allImages = [].concat(...images);
    //        console.log(allImages)
    //         SetSliderData(allImages)})
    //     .catch(err=>console.log(err.message))
    // },[])

    //fake Api Store
//const api = https://fakestoreapi.com/products?limit=5

    // useEffect(()=>{
    //     const api = ' https://fakestoreapi.com/products?limit=5'
    //     axios.get(api)
    //     .then(res=>{ const products = res.data;
    //         const images= products.map((img)=>img.image);
    //        const allImages=[].concat(...images);
    //        SetSliderData(allImages)
    //        })
    //     .catch(err=>console.log(err.message))
    // },[])