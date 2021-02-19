import React from "react";
import "./collection-item.scss"
import CustomButton from "../custom-button/CustomButton"

const CollectionItem = ({ name, price, imageUrl }) => {
    // console.log("CollectionItem", imageUrl)
    let style = {
        backgroundImage: `url(${imageUrl})`,
    }

    return (
        <div className="collection-item" >
            <div className="image" style={style} >  </div>
            <div className="collection-footer">
                <span className="name">   {name}   </span>
                <span className="price">  ${price}  </span>
            </div>
            <CustomButton inverted> add to cart   </CustomButton>
        </div>
    )
}


export default CollectionItem;

