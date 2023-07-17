import Navbar from "./component/Navbar";
import CartContainer from "./component/cartContainer";
import { useSelector,useDispatch } from "react-redux";
import { calculateTotal } from "./feature/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./component/Modal";
function App() {
  const { cartItems } = useSelector((state)=>state.cart)
  const { isOpen } = useSelector((state)=>state.modal)
  const dispatch = useDispatch();

  useEffect(()=>{
  dispatch(calculateTotal());
  },[cartItems]);
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
