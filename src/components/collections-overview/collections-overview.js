import React from "react";
import { connect } from "react-redux";

import "./collections-overview.scss";

import CollectionPreview from '../../components/collection-preview/collection-preview'
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector"


const CollectionsOverview = ({ collections }) => {
    //Страница шопа отрисовывающая коллекции

    console.log("CollectionsOverview -->", collections)
    return (
        <div div className="collections-overview" >
            {
                collections.map((shopDataItem) => {
                    return <CollectionPreview key={shopDataItem.id} {...shopDataItem} />
                })
            }
        </div >
    )
}


const mapStateToProps = (state) => {
    return (
        { collections: selectCollectionsForPreview(state) }
    )
}

export default connect(mapStateToProps)(CollectionsOverview);

