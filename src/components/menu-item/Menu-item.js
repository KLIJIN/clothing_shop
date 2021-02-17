import React from "react";
import "./Menu-item.scss";

const Menuitem = ({ title, imageUrl, linkUrl, size }) => {
    let style = {
        backgroundImage: `url(${imageUrl})`,
    }



    return (
        <div className={`menu-item ${size ? "large" : ""}`}  >
            <div className="background-image" style={style} />
            <div className="content">
                <h1 className="title" >  {title.toUpperCase()} </h1>
                <span className="subtitle"> SHOP NOW </span>
            </div>
        </div>
    )
};

export default Menuitem;