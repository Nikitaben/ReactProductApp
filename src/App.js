import  '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import React, { Component } from 'react';
import Products from './Components/products';
import Header from './Components/header';

class App extends React.Component {
  state = {
    products: [
        {id: 1, value: 0, price: 12.99},
        {id: 2, value: 1, price: 15.67},
        {id: 3, value: 0, price: 30.98},
        {id: 4, value: 2, price:19.55},

    ],
  };
  hanleResetAll = () => {
    const products = this.state.products.map((p) => {
      p.value = 0;
      return p;
  });
  this.setState({products});

}
handleReset = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].value = 0;
    this.setState({products});

}
handleAdd = () => {
    const products = [...this.state.products];
    const id = products[products.length -1].id + 1;
    products.push({id: id, value: 0, price: 0});
    this.setState({products});
}

handleIncrement = (product) => {

    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].value++;
    this.setState({ products: products});
 
};
handleDecrement = (product) =>{
  
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].value--;
    this.setState({ products: products}); 
};
handleDelete = (product) => {
    const products = this.state.products.filter(
        (p) => p.id !== product.id);
    this.setState({ products});
};
render(){
  return (
    <div className="container">
      <Header></Header>
      <Products></Products>
      products={this.state.products}
      onDelete={this.handleDelete}
      onAdd={this.handleAdd}
      onReset={this.handleReset}
      onResetAllItems={this.hanleResetAll}
      onIncrement={this.handleIncrement}
      onDecrement={this.handleDecrement}
     
    </div>
  );
  }
}
export default App;
