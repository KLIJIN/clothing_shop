import React from "react";
import "./collection-item.scss"


const CollectionItem = ({ name, price, imageUrl }) => {
    console.log(imageUrl)
    let style = {
        backgroundImage: `url(${imageUrl})`,
    }

    return <div className="collection-item" >
        <div className="image" style={style} >  </div>
        <div className="collection-footer">
            <span className="name">   {name}   </span>
            <span className="price">  {price}  </span>
        </div>
    </div>
}

export default CollectionItem;

