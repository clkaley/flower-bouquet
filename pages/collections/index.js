import React from 'react'
import CollectionsCard from '../../components/CollectionsCard';
import { getAllCollections } from '../../lib/shopify'

export default  function Collections({collections}) {
  console.log("collections ",collections[0].node.handle);

  return (
    <>
 <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-pink-400 mb-6">
          Collections
        </h2>
        <div className="grid grid-cols-4 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
         
        {
            collections.map(collection => (
              <CollectionsCard key={collection.node.id} collection={collection} />
            ))
          }
       </div>
      </div>
    </div>
    </>
  )
}

export async function getServerSideProps({context}) {
  const collections = await getAllCollections(context)

  return {
    props: { collections }, 
  }
}

