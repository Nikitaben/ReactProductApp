import React, { Component } from 'react';
import Product from './product';

class Products extends React.Component {

    
    render() { 
        // const totalNumber = this.props.products.length;
   // .filter((p) => p.value > 0)
        return (
            
        <div>
           
           <button onClick={this.props.onAdd}
           className="btn btn-sucess btn-sm my-3">AddItem</button>

          <button
          onClick={this.props.onResetAll}
          className="btn btn-warning btn-sm mx-2 my-3"
        >
          Reset All Items
        </button>

            {this.props.products.map((p) => 
            (<Product key={p.id}
            product={p}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            onReset={this.props.onReset}
           // onResetAllItems={this.hanleResetAll}
            ></Product>))}
        </div>);
    }
   

}
 
export default Products;