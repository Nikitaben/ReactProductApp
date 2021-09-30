import React, { Component } from 'react';
import Product from './product';

class Products extends React.Component {

    state = {
        products: [
            {id: 1, value: 0, price: 12.99},
            {id: 2, value: 1, price: 15.67},
            {id: 3, value: 0, price: 30.98},
            {id: 4, value: 2, price:19.55},

        ]

    }
    render() { 
        
        return (
        <div>
            {this.state.products.map((p) => 
            (<Product key={p.id}
            product={p}
            onClick={this.handleIncrement}></Product>))}
        </div>);
    }
    handleIncrement = (product) => {
        const counters = [this.state.counters];
        const index = counters.indexOf(product);
        console.log("index: ", index);
       // console.log("id", product.id);
    };
    handleDecrement = () =>{
       
    }
}
 
export default Products;