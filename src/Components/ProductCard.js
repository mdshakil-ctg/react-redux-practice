import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../Redux/actionCreators/productActions';

const ProductCard = ({product}) => {
   const {image, model} = product;
   const dispatch = useDispatch();
   const {pathname} = useLocation();

   return (
      <div className="card bg-base-100 shadow-xl">
        <div>{product.quantity}</div>
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
      {
        !pathname.includes('cart') &&
        <button
      onClick={()=> dispatch(addToCart(product))}
      className="btn btn-warning">Add To Cart</button> 
      }
    { !pathname.includes('cart') &&<div className="btn btn-warning btn-outline">+</div>}
      {
        pathname.includes('cart') &&
        <button
      onClick={()=> dispatch(removeFromCart(product))}
      className="btn btn-warning" >Remove From Cart</button> }
    </div>
  </div>
</div>
   );
};

export default ProductCard;