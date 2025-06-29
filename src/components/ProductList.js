import React from 'react';
import Product from './Product'


export default function ProductList(props) {
    return (
      props.productList.length > 1 ?
    props.productList.map((product,i)=> {
        return <Product product ={product} key={i} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity ={props.decrementQuantity} removeItem = {props.removeItem}/>
    })
    : <h1>No products Exists in the Carts</h1>
  
  )
}


