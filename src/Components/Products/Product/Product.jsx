import React from 'react';
import './Product.css';

const Product = (props) => {
    const { product, addToCart } = props
    return (
        <div className="col-md-4 mb-5">
            <div className=" card card-shadow w-100 h-100">
            <img src={product.image} className="card-img-top p-3 img-fluid text-center mt-3  h-100" alt="..." />
            <div className="m-1 p-2">
                <h6>Name : {product.name}</h6>
                <p>Price : ${product.price}</p>
            </div>
            <div className="card-footer text-center">
                <p>
                <button onClick={()=>addToCart(product)} type="button" className="btn btn-danger text-white rounded">Add To Card   <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </button>

                </p>

            </div>
            </div>
        </div>
    );
};

export default Product;