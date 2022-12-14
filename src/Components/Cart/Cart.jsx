import React from 'react';

function Cart(props) {
    const {cart, clearCart, setCart} = props
    
    const chooseOne = (cart)=>{
        if(cart.length>0){
            let suffledArr = [...cart]
            const rand=Math.floor(Math.random()*(suffledArr.length))
            setCart([suffledArr[rand]])
        }else{
            alert("Select Product First")
        }
    }

    return (
        <section className="col-md-3 order-sm-1">                    
            <div className="card mb-5">
            <div className="p-1">
                <h6 className="p-2 card-title text-center">Selected Products</h6>
                {
                    cart.map((cart,index)=>{
                        return (
                            <div key={index} className="card my-2 p-2 d-flex flex-row align-items-center">
                                <img className='img-fluid w-25 rounded' src={cart.image} alt=""/>
                                <h6 className='mt-2 ps-2'>{cart.name}</h6>
                            </div>
                    
                    )})
                }
            </div>
            <button onClick={()=>chooseOne(cart)} type="button" className="btn btn-info text-white mx-2">Choose One</button><button onClick={()=>clearCart()}type="button" className="btn btn-danger text-white mx-2 my-2">Choose Again</button>
            </div>
        </section>
    );
}

export default Cart;