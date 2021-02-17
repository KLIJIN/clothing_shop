import React, { useState } from "react";
import shopData from "../../collections"
import CollectionPreview from '../../components/collection-preview/collection-preview'

const ShopPage = () => {

    const [state, setState] = useState(shopData)
    console.log("ShopPage", state)

    return <div className="shop-page">

        {state.map(({ id, ...collection }) => {
            console.log("ShopPage", state)
            return <CollectionPreview key={id} {...collection} />
        }

        )}

        {/* SHOP
        <CollectionPreview {...state[0]} /> */}
    </div>
}

export default ShopPage;