import React from 'react';

function Cart(props) {
    const {cart, clearCart, setCart} = props
    
    const chooseOne = (cart)=>{
        let suffledArr = [...cart]
        for(let i=suffledArr.length-1;i>0;i--){
            let rand =Math.floor(Math.random()*(i+1))
            let temp = suffledArr[rand]
            suffledArr[rand] = suffledArr[i]
            suffledArr[i] = temp
        }

        setCart([suffledArr[0]])
    }

    return (
        <div className="col-md-3">                    
            <div className="card">
            <div className="p-1">
                <h5 className="card-title">Selected Products</h5>
                
                {
                    cart.map((cart,index)=>{
                        return (
                            <div className="card my-2 p-2 d-flex flex-row align-items-center">
                                <img className='img-fluid w-25 rounded' src={cart.image} alt="" srcset="" />
                                <h6 className='mt-2 ps-2'>{cart.name}</h6>
                            </div>
                    
                    )})
                }
            </div>
            <button onClick={()=>chooseOne(cart)} type="button" className="btn btn-info text-white mx-2">Choose 1 For Me</button><button onClick={()=>clearCart()}type="button" className="btn btn-danger text-white mx-2 my-2">Choose Again</button>
            </div>
        </div>
    );
}

export default Cart;