import React from "react";
import CartItem from "./cartItem";

const Cart=(props)=> {
        const products = props.products;
        console.log(products);
        return (
            <div id="cart">
                {
                    products.map((item) => {
                        console.log(item);
                        return (
                            <CartItem 
                                product={item}
                                key={item.id}
                                increaseQuantity={props.increaseQuantity} 
                                decreaseQuantity={props.decreaseQuantity}
                                deleteItem={props.deleteItem} 
                            />
                        )
                    })
                }
            </div>
        )
}

export default Cart;