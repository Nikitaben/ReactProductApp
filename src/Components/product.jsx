import React, { Component } from 'react';

class Product extends React.Component {
    state = {
        count: 0
    };
    render() { 
       // console.log(this.props);
        return (
       <div>
           Product: #  {this.props.product.id} <span>{this.props.product.value}</span>
           <button 
           onClick={() => this.props.onIncrement(this.props.product)}
           className="btn btn-primarmy btn-sm m-2"
           disabled={this.props.product.value > 10 }> + </button>
           
           <button
           onClick={() => this.props.onDecrement(this.props.product)}
           className="btn btn-primarmy btn-sm m-2"
           disabled={this.props.product.value === 0 }>-</button>
           <button 
           className="btn btn-danger btn-sm m-2"
           onClick={() => this.props.onDelete(this.props.product)}>Delete</button>

           <button
           onClick={() => this.props.onReset(this.props.product)}
           className="btn btn-warning btn-sm mx-2 border border-primary"
           disabled={this.props.product.value === 0}>
               Reset
           </button>
       </div>
        );
    }
    


    // formatCount() {
    //     const {count} = this.state;
    // return count === 0 ? "0" : count;
    // }   
}
export default Product;