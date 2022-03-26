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
            <div className="card-body">
                <h5 className="card-title">Selected Products</h5>
                
                
                {

                    cart.map((cart,index)=>{
                        return (
                        
                        <div className="prduct">
                            
                        </div>
                    
                    )})
                }
            </div>
            <button onClick={()=>chooseOne(cart)} type="button" className="btn btn-info text-white">Choose 1 For Me</button><button onClick={()=>clearCart()}type="button" className="btn btn-danger text-white">Choose Again</button>
            </div>
        </div>
    );
}

export default Cart;