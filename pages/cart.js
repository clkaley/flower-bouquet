import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useBasket } from '../context/basketContext'
import Link from 'next/link';
import Image from 'next/image';


export default function Cart() {
  //yönlendirme için
  const router = useRouter();

  //contexten alınanlar
  const {items,removeProduct,setItems}=useBasket();
  

  //ürünlerin toplam fiyatını yazdıran fonksiyon
  const total=items.reduce((acc,item)=>acc+Number(item.variants.edges[0].node.priceV2.amount),0)
  

  //console.log("item quantity",items[0].collections.edges[0].node.products.edges[0].node.totalInventory);



const increment=(item_id)=>{
  console.log("incremente basıldı",item_id);
  const newCount = items.find((item) => item.id === item_id);
  console.log("new",newCount);
  
}

const decrement=(item_id)=>{
  console.log("decremente basıldı",item_id);
}


  //console.log("ürünün fiyatı ",Number(items[0].variants.edges[0].node.priceV2.amount));
  
  //bunu düşün toplam adet kadar sepete ekleyebilirsin
  //console.log("ürünün toplam adeti :",items[0].collections.edges[0].node.products.edges[0].node.totalInventory);

  return (
    <>
    

      {items.length<1 && <div className="flex flex-col space-y-7 justify-center items-center md:py-8 md:px-12 px-4 py-6 h-screen">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-sm text-pink-500">
        No Flowers in the Bouquet
      </h2>
      
      <button
        onClick={() => router.push('/products')}
        className="inline-block rounded-sm 
        font-medium text-center py-3 px-4  leading-none bg-pink-300 text-white w-full"
      >
        Continue shopping
      </button>
      </div>}

      {items.length>0 && (
        <div className='  grid justify-items-center text-center'>
          <button  className="bg-pink-300 mt-5 mx-5 rounded-lg text-white px-2 py-2 mb-2 hover:bg-pink-400" onClick={() => router.push('/products')}>Continue Shopping</button>
            <ul className='p-5  '>
              {
                items.map((item)=>(
                  <li  className='mt-5 p-5 border  text-pink-400 border-pink-400' key={item.id}>
                  
                  {item.title} 
                  <br /> 
                  {item.description}
                    <br />
                  {items[0].variants.edges[0].node.priceV2.amount}
                  <div className="mt-5 relative group-hover:opacity-75 h-56 w-56">
             <Image 
              src={item.images.edges[0].node.src}
              alt={item.images.edges[0].node.altText}
              onClick={() => router.push(`/products/${item.handle}`)} 
              layout="fill"
              objectFit="cover"
            /> 
          </div>
          <br />
          <button onClick={() => decrement(item.id)}>Remove</button>
          <br />
       
          <button  onClick={() => increment(item.id)}>Add</button>

          <div className='flex items-center'>
        <button  className="inline-block rounded-sm mt-3 
        font-medium text-center py-3 px-4  leading-none bg-pink-300 text-white w-50" onClick={()=>removeProduct(item.id)
        
        }>Remove to Bouquet</button>
              </div>  
                  </li>
                ))
              }
            
            </ul>
        </div>
      )}
      <br />
      <div className='m-5 text-pink-600'>
        Total Price  {total} $
      </div>
      
    </>
  )
}




