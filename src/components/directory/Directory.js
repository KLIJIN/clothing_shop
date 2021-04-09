import React, { useState } from "react";
import "./Directory.scss";
import { data } from "../../data.js"
import { useSelector } from "react-redux";
import Menuitem from "../menu-item/Menu-item";


//Directory - меню  с категориями товаров
const Directory = () => {

    const sectionsProps = useSelector(state => state.directoryR.sections);
    // console.log("Directory -->", sectionsProps);

    return <div className="directory-menu">
        {sectionsProps.map(item => <Menuitem key={item.id} {...item} />)}
    </div>
}




export default Directory;