import React,{useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';
import {useBasket} from '../context/basketContext'


function ProductDetails({product}) {
  const router = useRouter();

  const {addToProduct,items}=useBasket();

  //console.log("Product details+++ items",items);

//sayı adedi
  console.log(" product totalInventory",product.collections.edges[0].node.products.edges[0].node.totalInventory);




  console.log("detail",product);
  //console.log("product amount",product.variants.edges[0].node.priceV2.amount);
  //console.log("product variant valiable",product.variants.edges[0].node.availableForSale);

  const available=product.variants.edges[0].node.availableForSale
  
  const findBasketItem=items.find((item)=>item.id===product.id)


  return (
    <>
    <div className='text-pink-300 '>
      <div className="  
       content-around  overflow-hidden  text-center mt-5">
         <Image 
              src={product.images.edges[0].node.src}
              alt={product.images.edges[0].node.altText}
              height={350}
              width={350}
              objectFit="cover"
          />
  <div className="px-6 py-4 text-md">
    <div className="font-bold  mb-2">{product.title}</div>
    <p className=" text-base">
      {product.description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2 text-md">
    <span className="inline-block bg-pink-300  rounded-full px-3 py-1 text-sm font-bold text-white mr-2 mb-2">{product.variants.edges[0].node.priceV2.amount} $</span>
   
  </div>

    {
        available ?
          <button
           className="bg-pink-300  rounded-lg text-white px-2 py-2 mb-2 hover:bg-pink-400"  
            onClick={()=>addToProduct(product,findBasketItem)}
           >
           {
            findBasketItem ? "Remove from Bouquet" : "Add to Bouquet"
           }
          </button> :
          <button
            className="rounded-lg text-pink-200 px-2 py-3 mt-3 cursor-not-allowed ">
              Sold out!
          </button>
      }
      <br />
      <button  className="bg-pink-300  rounded-lg text-white px-2 py-2 mb-2 hover:bg-pink-400"  onClick={() => router.push('/products')}> Back to Flowers</button>
    
</div>
      
      
    </div>
    </>
  )
}

export default ProductDetails


//onClick={() => router.push('/cart')}