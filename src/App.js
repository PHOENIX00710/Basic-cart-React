import React from 'react';
import Cart from './Cart';
import Navbar from './NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          name: "Shoes",
          price: 1000,
          quantity: 14,
          imgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          id: 1,
        },
        {
          name: "Watch",
          price: 99,
          quantity: 20,
          imgUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
          id: 2,
        },
        {
          name: "Phone",
          price: 10000,
          quantity: 10,
          imgUrl: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          id: 3,
        }
      ]
    }
  };


  handleIncreaseCount = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].quantity += 1;
    this.setState({
      products,
    })
  }

  handleDecreaseCount = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].quantity == 0)
      return;
    products[index].quantity -= 1;
    this.setState({
      products,
    })
  }

  handleDeleteItem = (product) => {
    const { products } = this.state;
    let items = products.filter((item) => item.id !== product.id);
    console.log(items);
    this.setState({
      products: items,
    })
  }

  getCartCount = () => {
    let count = 0;
    const { products } = this.state;
    products.forEach((item) => {
      count += item.quantity;
    })
    return count;
  }

  getTotalPrice=()=>{
    let totalPrice=0;
    const {products} = this.state;
    products.forEach((item)=>{
      totalPrice+=item.quantity*item.price;
    })
    return totalPrice;
  }

  render() {
    return (
      <div className="App">
        <Navbar cartCount={this.getCartCount()} />
        <Cart
          products={this.state.products}
          increaseQuantity={this.handleIncreaseCount}
          decreaseQuantity={this.handleDecreaseCount}
          deleteItem={this.handleDeleteItem} //this is required as it is a function of this class and we need to consider an instance of the class to access the function
        />
        <h3 style={{marginLeft:8}} >Total Price: {this.getTotalPrice()} </h3>
      </div>
    );
  }
}

export default App;
