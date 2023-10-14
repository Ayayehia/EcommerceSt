import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { InitializeCart } from "../Redux/Slices/CartSlice";

function FirebaseDataSync() {
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.cart.items);
  const TotalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    // Send data to Firebase when Data or TotalQuantity changes
    axios
      .put("https://cart-41e43-default-rtdb.firebaseio.com/Cart.json", {
        Data: Data,
        totalQuantity: TotalQuantity,
      })
      .then((res) => console.log(res, "data sent to Firebase"));
  }, [Data, TotalQuantity]);

  useEffect(() => {
    // Fetch data from Firebase when the component mounts
    axios
      .get("https://cart-41e43-default-rtdb.firebaseio.com/Cart.json")
      .then((res) => {
        if (res.data) {
          const cartData = res.data.Data;
          const totalQuantity = res.data.totalQuantity;
          if (cartData) {
            // Extract the nested array and flatten it
            const flattenedCartData = cartData.flat(3);

            // Dispatch the InitializeCart action with the flattened array and totalQuantity
            dispatch(InitializeCart({ Data: flattenedCartData, totalQuantity }));
          }
        }
      });
  }, [dispatch]);

  return null; 
}

export default FirebaseDataSync;
