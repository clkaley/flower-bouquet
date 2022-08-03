import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { getProduct } from '../lib/shopify';
export default function Cart({cart}) {
  console.log("cart router",cart);
  
  const router = useRouter()




  console.log("cart products",cart);
  return (
    <>
      <div className="flex flex-col space-y-7 justify-center items-center md:py-8 md:px-12 px-4 py-6 h-screen">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-sm text-pink-400">
        Shopping cart is empty
      </h2>
      
      <button
        onClick={() => router.push('/products')}
        className="inline-block rounded-sm 
        font-medium text-center py-3 px-4  leading-none bg-pink-300 text-white w-full"
      >
        Continue shopping
      </button>
      </div>
    </>
  )
}




