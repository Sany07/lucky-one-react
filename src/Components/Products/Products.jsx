import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';

const Products = ()=> {

    const [products,setProducts] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data =>setProducts(data))
    }, []);

    return (
        <div className="row">
            <div className="col-md-9">
                <div className="row">
                    {
                        products.map((product,index)=>{
                            return <Product product={product} key={index}/>
                        })
                    } 
                </div>                
            </div>
            <Cart/>
        </div>


    );
}

export default Products;