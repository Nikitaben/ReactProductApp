import React, { Component } from 'react';

class Product extends React.Component {
    state = {
        count: 0
    };
    render() { 
        console.log(this.props);
        return (
       <div>
           Product: #  {this.props.product.id} <span>{this.props.product.value}</span>
           <button 
           onClick={() => this.props.onClick(this.props.product)}
           className="btn btn-primarmy btn-sm m-2">+</button>
           <button
           onClick={this.handleDecrement} 
           className="btn btn-primarmy btn-sm m-2"
           disabled={this.state.count === 0 }>-</button>
       </div>
        );
    }
    


    // formatCount() {
    //     const {count} = this.state;
    // return count === 0 ? "0" : count;
    // }   
}
export default Product;