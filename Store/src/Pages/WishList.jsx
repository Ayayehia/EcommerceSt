import { useSelector } from "react-redux"
import NOWishList from "../Components/EmptyWishList"
import WishListItems from "../Components/WishListItems"
import Classes from "../assets/Css/WishListItems.module.css"

const WishList = () => {

 const wishlist = useSelector((state)=>state.wishlist.items)

 const emptyWishList= wishlist.length == 0

const WishListDisplayed = <div style={{ marginTop:"6%"}}>
<h1 className={Classes.title}>My WishList</h1>
<hr/>
<table style={{ flexDirection:" column"}}>
  <thead>
    <tr className={Classes.itemsTitle} >
        <th > Product Name</th>
        <th> Unit price</th>
        <th> Stock Status</th>
        <th> Actions</th>
    </tr>
    </thead>
    <hr/>
  {wishlist.map((prod) => ( <WishListItems id={prod.id}  price={prod.price} image={prod.image} title={prod.name}/>
 
))}
</table>
</div> 
console.log(wishlist,"using reducer of filter on id on the wishlist component")

  return (
    <>
  {emptyWishList ? < NOWishList/> :  WishListDisplayed }
    </>
  )
}

export default WishList
