import React from "react";
import "./collection.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelector"
import CollectionItem from "../../components/collection-item/collection-item"

const CollectionPage = ({ match, collection }) => {
    const { title, items } = collection;
    console.log("CollectionPage", match.params?.collectionID)
    console.log("CollectionPage", collection)
    return (
        <div className="collection-page">
            <h2 className="title"  > {title}   </h2>
            <div className="items"  >
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))

                }
            </div>

        </div>
    )
}


const mapStateToProps = (state, someProps) => ({
    collection: selectCollection(someProps.match.params?.collectionID)(state)
})


export default connect(mapStateToProps)(CollectionPage);



