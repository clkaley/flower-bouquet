import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function CollectionsCard({collection}) {
    console.log("Collection Card"+collection.node);
    //const { title} = collection.node
   
  return (
      <>
 <Link
 href={`/collections/${collection.node.handle}`}
>
 <a className="group">
   <div className="w-full bg-gray-200 rounded-sm overflow-hidden ">
     <div className="relative flex group-hover:opacity-75 h-36">
       <Image 
         src={collection.node.image.src}
         alt={collection.node.image.altText}
         layout="fill"
         objectFit="cover"
       />
     </div>
   </div>
   <h3 className="mt-4 text-sm font-sm  text-center text-pink-500">{collection.node.title}</h3>

 </a>
</Link>
</>
  )
}

export default CollectionsCard