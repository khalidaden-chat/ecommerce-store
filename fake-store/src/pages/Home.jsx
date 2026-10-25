
import { useState,useEffect } from "react";
import ProductCard from "../components/ProductCard";
function Home(){
    const [products,setProducts]=useState([]);
    const[loading, setLoading]=useState(true);
    useEffect(()=>{
        const fetchproduct = async ()=>{
            try{
               const response = await fetch('https://fakestoreapi.com/products')
               const data = await response.json();
               setProducts(data);
               setLoading(false);

            }
            catch(error){
                console.error('error getting product',error)

            }
        }
        fetchproduct();
    },[]);
    return (
<div className="home-page"> 
 {loading ? <p>Loading products...</p> : <div className="product-grid">   
{products.map((product)=>
(<ProductCard key={product.id}

 product={product}/>))}
    </div>}
</div>
    )
}
export default Home;