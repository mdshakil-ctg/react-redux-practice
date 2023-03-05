import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../Redux/actionTypes/actionTypes';

const ProductCard = ({product}) => {
   const {image, model} = product;
   const dispatch = useDispatch();

   return (
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {model}
    </h2>
    {
      product.keyFeature.map(feature => <li key={feature}>{feature}</li>)
    }
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button
      onClick={()=> dispatch({type: ADD_TO_CART, payload: product})}
      className="btn btn-warning">Add To Cart</button> 
      <div className="btn btn-warning btn-outline">+</div>
    </div>
  </div>
</div>
   );
};

export default ProductCard;