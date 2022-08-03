import ProductCard from '../../components/ProductCard';
import { getAllProducts } from '../../lib/shopify';

export default function Product({products}) {
  console.log("Products ",products);
  return (
    <>
  <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-pink-400 mb-6">
          Flowers
        </h2>
        <div className="grid grid-cols-4 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {/* Ürünler üzerinde mapleme ve her biri için ProductCard.js'nin görüntülenmesi. */}
         {
            products.map(product => (
              <ProductCard key={product.node.id} product={product} />
            ))
          }
       </div>
      </div>
    </div>
    </>
  )
}


//!getAllProducts query tüm ürünleri  getirmek için Next.js tarafından bize sağlanan getStaticProps fonksiyonunu kullandık.
export async function getServerSideProps({context}) {
    const products = await getAllProducts(context)
  
    return {
      props: { products }, 
    }
  }