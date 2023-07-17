import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import CartItem from './cartItem';
import { openModal} from '../feature/model/modelSlice'

function CartContainer() {
    const {cartItems,total,amount} = useSelector((state)=> state.cart);
    const dispatch = useDispatch();

    if( amount<1)
    return <section className='cart'>
    <header>
        <h2>Your bag</h2>
        <h4 className='empty-cart'> is currently empty</h4>
    </header>
    </section>
  return (
    <>
    <section className='cart'>
        <header>
            <h2>Your bag</h2>
            <div>
                {
                    cartItems.map((cartItem)=>{
                    return <CartItem key={cartItem.id} {...cartItem} />
                })}
            </div>
        </header>
        <footer>
            <hr/>
            <div className='cart-total'>
             <h4>total<span>${total.toFixed(2)}</span></h4>
            </div>
            <button className='btn clear-btn' onClick={()=> dispatch(openModal())}>clear cart</button>
        </footer>
    </section>
    
    </>
  )
}

export default CartContainer
