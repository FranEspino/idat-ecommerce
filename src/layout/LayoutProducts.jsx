import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

const LayoutProducts = () => {
  const [products,setProducts] = useState([])

  useEffect(()=> {
    getProducts()
  },[])

  const getProducts = async() =>{
    //    fetch('https://fakestoreapi.com/products/')
    // .then( res => res.json())
    // .then( data =>setProducts(data) )
    const res = await axios.get("https://fakestoreapi.com/products")
    setProducts(res.data)
  }

  return (
    <div className="flex gap-2 flex-wrap justify-center mt-8">
        {
          products.map( product => (
            <Product
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              rating={product.rating.rate}
          />)
          )
        }
    </div>
  );
};

export default LayoutProducts