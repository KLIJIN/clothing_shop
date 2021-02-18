import React, { useState } from "react";
import shopData from "../../collections"
import CollectionPreview from '../../components/collection-preview/collection-preview'

const ShopPage = () => {

    const [state, setState] = useState(shopData)
    console.log("ShopPage_shopData", state)

    return <div className="shop-page">

        {state.map((shopDataItem) => {
            console.log("ShopPage_mappingState", shopDataItem)
            return <CollectionPreview key={shopDataItem.id} {...shopDataItem} />
        }

        )}

        {/* SHOP
        <CollectionPreview {...state[0]} /> */}
    </div>
}

export default ShopPage;