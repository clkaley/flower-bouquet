import React from 'react'
import CollectionDetailsCard from '../../components/CollectionDetailsCard';
import { getProductsInCollection } from '../../lib/shopify';

export default  function CollectId({collection}) {
  console.log("collection detail ",collection);
  //console.log("collection",collection.node[0].id);
  return (
    <div>
        {
            collection.map(collection => (
              <CollectionDetailsCard key={collection.node.id} collection={collection} />
            ))
          }

   
    </div>
  )
}


export async function getServerSideProps(context) {
  console.log(context);
  const collection = await getProductsInCollection(context.params.collection);
  return {
    props: {
     collection,
    },
  };
}