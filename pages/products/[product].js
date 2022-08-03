import React from 'react'
import ProductDetails from '../../components/ProductDetails';
import { getProduct } from '../../lib/shopify';

export default function ProductDetail({product}) {
 
console.log("[productDetail]",product);
  return (
    <div>
       <ProductDetails product={product}/>
       
    </div>
  )
}



export async function getServerSideProps(context) {
  console.log(context);
  const product = await getProduct(context.params.product);
  return {
    props: {
      product,
    },
  };
};

