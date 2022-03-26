import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';

const Products = ()=> {

    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data =>setProducts(data))
    }, []);


    const addToCart=(product)=>setCart([...cart,product])
    const clearCart =()=>setCart([])


    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    {
                        products.map((product,index)=>{
                            return <Product addToCart={addToCart}  product={product} key={index} />
                        })
                    } 
                </div>                
            </div>
            <Cart  clearCart={clearCart} cart={cart} setCart={setCart}
            />

        </div>


    );
}

export default Products;