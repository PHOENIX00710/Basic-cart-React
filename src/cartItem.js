import React from "react";

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Shoes",
            price: 1000,
            quantity: 1,
            imgUrl: "",
            minusUrl: "https://cdn-icons-png.flaticon.com/512/659/659892.png",
            plusUrl: "https://w7.pngwing.com/pngs/68/239/png-transparent-number-computer-icons-plus-miscellaneous-game-plus.png",
            delUrl: "https://cdn-icons-png.flaticon.com/512/1345/1345874.png",
        }
        this.increaseCount=this.increaseCount.bind(this);
    };
    //Using Hard-Binding and by passing objects in setState
    increaseCount(){
        this.setState({
            quantity:this.state.quantity+1,
        })
    }

    //Using arrow functions and passing callBack Functions
    decreaseCount=()=>{
        // To chech for 0
        const {quantity}=this.state;
        if(quantity == 0)
            return;
        this.setState((prevState)=>{
            return{
                quantity:prevState.quantity-1,
            }
        })
    }

    deleteItem=()=>{
        console.log(this.state);
    }

    render() {
        const { name, price, quantity, imgUrl } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.image} />
                </div>
                <div className="right-block">
                    <div>{this.state.name}</div>
                    <div>{this.state.price}</div>
                    <div>{this.state.quantity}</div>
                    <div className="cart-item-actions">
                        <img
                            alt="decreaseCount"
                            className="action-icons"
                            src={this.state.plusUrl}
                            onClick={this.increaseCount}
                        />
                        <img
                            alt="increaseCount"
                            className="action-icons"
                            src={this.state.minusUrl}
                            onClick={this.decreaseCount}
                        />
                        <img
                            alt="deleteItem"
                            className="action-icons"
                            src={this.state.delUrl}
                            onClick={this.deleteItem}
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