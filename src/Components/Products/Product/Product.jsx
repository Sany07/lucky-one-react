import React from 'react';

const Product = (props) => {
    const { product, addToCart } = props
    return (
        <div className="col-md-4">
            <div className="card h-100">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">
                <button onClick={()=>addToCart(product)} type="button" className="btn text-black">Add To Card   <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                </button>
              
                </small>
            </div>
            </div>
        </div>
    );
};

export default Product;