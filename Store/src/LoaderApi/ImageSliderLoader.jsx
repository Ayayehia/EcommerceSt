import axios from "axios";

export default async function loaderImage() {
        const api = ' https://fakestoreapi.com/products?limit=5'
       return  await axios.get(api)
        .then(res=>{ const products = res.data;
           const images= products.map((img)=>img.image);
          const allImages=[].concat(...images);
          return allImages
           })
        .catch(err=>{console.log(err.message);
        return null})
       
    }
    //mapped over the products to get access only on the images then uses the concat function to create put these image object in one array