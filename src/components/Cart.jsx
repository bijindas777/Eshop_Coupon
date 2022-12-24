import React from 'react';
import { useSelector } from 'react-redux';
import product from './product';
import products from './products';

const Cart = ()=> {

  
  return (
    <div>
      {products?.length > 0 ? (

      <div className='row'>
        <div className='col-4'>
      <img src={product.image} alt={product.title} 
      height="200px" width="180px"/>
        </div>
        <div className='col-4'>
            <h3>{product.title}</h3>
            <p className='lead fw-bold'>
                {product.qty} x ${product.price}= $
                {product.qty * product.price}
            </p>
            <button className='btn btn-outline-dark me-4'
            onClick={()=>handleButton(product)}
            ><i className='fa fa-minus'></i>
            </button>
            <button className='btn btn-outline-dark me-4'
            onClick={()=>handleButton(product)}
            ><i className='fa fa-plus'></i>
            </button>

        </div>

      </div>
      ):(
        <p>Nothing</p>
      )}
    </div>
  )
}

export default Cart
