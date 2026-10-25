import { useContext } from "react";
import { CartContext } from "../context/CartContext";



function Cart(){
    const {cart,removeFromCart}=useContext(CartContext)
    const totalprice = cart.reduce((total,item)=>total + item.price,0)
    return(
        <div>
  {cart.length === 0 ? (
    <h2>your cart is empty</h2>
  ) : (
    <div className="cart-items">
        <h3>total:${totalprice.toFixed(2)}</h3>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <button onClick={()=>removeFromCart(item.id)} >Remove</button>
        </div>
      ))}
    </div>
  )}
</div>
        
    )
}
export default Cart;