import React from "react";
import { withRouter } from 'react-router-dom';
import "./Menu-item.scss";


const Menuitem = ({ title, imageUrl, linkUrl, size, history, match }) => {
    let style = {
        backgroundImage: `url(${imageUrl})`,
    }
    //const { location: { pathname } } = history
    const { url } = match
    // console.log(pathname)
    // console.log(url.length)
    // console.log(linkUrl)
    return (
        <div className={`menu-item ${size ? "large" : ""}`} onClick={() => history.push(`${url.length < 2 ? url : url + "/"}${linkUrl}`)} >
            <div className="background-image" style={style} />
            <div className="content">
                <h1 className="title" >  {title.toUpperCase()} </h1>
                <span className="subtitle"> SHOP NOW </span>
            </div>
        </div>
    )
};

export default withRouter(Menuitem);