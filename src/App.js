import Navbar from "./component/Navbar";
import CartContainer from "./component/cartContainer";
import { useSelector,useDispatch } from "react-redux";
import { calculateTotal,getCartItems } from "./feature/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./component/Modal";
function App() {
  const { cartItems,isLoading } = useSelector((state)=>state.cart)
  const { isOpen } = useSelector((state)=>state.modal)
  const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(calculateTotal());
  },[cartItems]);

  useEffect(()=>{
    dispatch(getCartItems());
    },[]);

    if(isLoading){
      return(
        <div>
          <h1>Loading......</h1>
        </div>
      )
    }
  return (
    <>
    <main>

      {
        isOpen && <Modal/>
      }
      <Navbar/>
      <CartContainer/>
    </main>
    </>
  );
}

export default App;
