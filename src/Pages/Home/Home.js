import React, { useEffect, useState } from 'react';
import ProductCard from '../../Components/ProductCard';
import {useSelector} from "react-redux"
const Home = () => {
   const [products, setProducts] = useState([]);
   useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
   },[])
   
   return (
      <div className='p-12'>
        <div className='grid grid-cols-2 gap-10'>
        {
            products.map(product => <ProductCard key={product._id}
            product={product}
            />)
         }
        </div>
      </div>
   );
};

export default Home;