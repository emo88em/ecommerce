import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/preview-collection/preview-collection.component';


class ShopPage extends React.Component {
   state = {
    collections: SHOP_DATA
   }

   render() {
       const {collections} = this.state
       return (
           <div className="shop-page">
               {
                   collections.map(({id, ...otherCollectionProps}) => {
                       return <CollectionPreview key={id} {...otherCollectionProps} />
                   })
               }
           </div>
       )
   }
}

export default ShopPage;