import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'


//!Tek bir ürün kartı için ProductCard.js oluşturuldu.
const ProductCard = ({ product}) => {
    console.log("Product Card ",product.node.title);
    /*
 

  const { altText, src } = product.node.images.edges[0].node

*/

  return (
    <>
  
    <Link
      href={`/products/${product.node.handle}`}
    >
      <a className="group">
        <div className="w-50 bg-gray-200  overflow-hidden rounded">
          <div className="relative group-hover:opacity-75 h-36">
             <Image 
              src={product.node.images.edges[0].node.src}
              alt={product.node.images.edges[0].node.altText}
              layout="fill"
              objectFit="cover"
            /> 
          </div>
        </div>
        <div className='text-center'>
        <h3 className="mt-4 text-sm font-medium text-purple-400">{product.node.title}</h3>
        <h4 className="mt-4 font-medium text-purple-200" style={{fontSize:"10px"}}>{product.node.description}</h4>
        <h6 className="mt-4 text-xs font-medium text-purple-200">{product.node.priceRange.minVariantPrice.amount} $</h6>
        </div>
      </a>
    </Link>
    </>
  )
}

export default ProductCard