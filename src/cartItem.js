import React from "react";

class CartItem extends React.Component {
    render() {
        const { name, price, quantity, imgUrl } = this.props.product;
        const {product,increaseQuantity,decreaseQuantity,deleteItem}=this.props;
        
        return (
             <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} alt="product image" src={imgUrl}/>
                </div>
                <div className="right-block">
                    <div>{name}</div>
                    <div>{price}</div>
                    <div>{quantity}</div>
                    <div className="cart-item-actions">
                        <img
                            alt="decreaseCount"
                            className="action-icons"
                            src="https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png"
                            onClick={()=>increaseQuantity(product)}
                        />
                        <img
                            alt="increaseCount"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/659/659892.png"
                            onClick={()=>decreaseQuantity(product)}
                        />
                        <img
                            alt="deleteItem"
                            className="action-icons"
                            src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                            onClick={()=>deleteItem(product)} // Not this.deleteItem as it is not a function of this class but a variable whose values has already been destructed above
                        />
                    </div>
                </div>
            </div>
        )
    };
}

const style = {
    image: {
        height: 110,
        width: 110,
        background: "#777",
        borderBox: 4
    }
}

export default CartItem;