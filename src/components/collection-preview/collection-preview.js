import React from "react";
import { withRouter, Link } from 'react-router-dom';
//assets
import "./collection-preview.scss";
//components
import CollectionItem from "../collection-item/collection-item";


const CollectionPreview = ({ title, items, history, location, match }) => {
    // console.log("CollectionPreview", match)
    const { url } = match
    return (
        <div className="collection-preview">
            {/* <h1 className="title"
                onClick={() => history.push(`${url + "/"}${title}`)} >
                {title}
            </h1 > */}
            {/* <Link to={`/shop/${title}`} className="logo-</Link>container">
                <h1 className="title"> {title} </h1 >
            </Link> */}
            <h1 className="title"> {title} </h1 >
            <div className="preview">
                {items
                    .filter((item, index) => index < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div >
    )

};

export default withRouter(CollectionPreview);