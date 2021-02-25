import React from "react";
import { connect } from "react-redux";

import "./collection-item.scss";
import CustomButton from "../custom-button/CustomButton";

import { addItemAction } from "../../redux/actions"


const CollectionItem = ({ item, addItemFunc }) => {

    const { name, price, imageUrl } = item;

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
            <CustomButton inverted onClick={() => addItemFunc(item)}    > add to cart   </CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItemFunc: (item) => dispatch(addItemAction(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);



