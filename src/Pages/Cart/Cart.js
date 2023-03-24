import React from 'react';
import {useSelector} from 'react-redux'
import { useLocation } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard';

const Cart = () => {

   const cart = useSelector(state => state.cart);
   const {pathname} = useLocation();

   return (
      <div>
         <h1>This is cart section</h1>
         <div className='grid grid-cols-2 gap-5'>
            {
               cart.sort((a,b) => a._id - b._id).map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
         </div>
      </div>
   );
};

export default Cart;