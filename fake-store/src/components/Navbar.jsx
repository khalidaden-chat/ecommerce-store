
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import{Link} from "react-router-dom"
function Navbar(){
    const {cart}=useContext(CartContext)
    return(
        <nav className="navbar">
<ul><li><Link to='/cart' >Cart({cart.length})</Link></li></ul>
        </nav>
    )
}
export default Navbar