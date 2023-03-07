import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ProductCard from '../../Components/ProductCard';
import {useSelector} from "react-redux"
const Home = () => {
   const [products, setProducts] = useState([]);
   useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
   },[])
   
   const state = useSelector((state) => state)
   console.log(state);
   return (
      <div>
        <div className='grid grid-cols-3 gap-5'>
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