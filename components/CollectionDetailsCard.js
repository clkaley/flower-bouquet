import React from 'react'
import Image from 'next/image';
export default function CollectionDetailsCard({collection}) {
    console.log("collection details card",collection);
    console.log("collection details id",collection.node.id);
    console.log("collection img src ",collection.node.images.edges[0].node.src);
  return (
    <div>
          <div>
      <div className="  
       content-around  overflow-hidden  text-center mt-4">
         <Image 
              src={collection.node.images.edges[0].node.src}
              alt={collection.node.images.edges[0].node.src.altText}
              height={150}
              width={150}
              objectFit="cover"
            />
  <div className="px-6 py-4 text-md">
    <div className="  mb-2 text-pink-400">{collection.node.title}</div>
 
  </div>
  <div className="px-6 pt-4 pb-2 text-md">
    <span className="inline-block bg-pink-300  rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{collection.node.priceRange.minVariantPrice.amount} $</span>
   
   
  </div>
      
</div>
</div>
</div>
   
  )
}

