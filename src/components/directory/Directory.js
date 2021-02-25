import React, { useState } from "react";
import "./Directory.scss";
import { data } from "../../data.js"
import Menuitem from "../menu-item/Menu-item";
import { connect } from 'react-redux'
import { selectDirectorySections } from "../../redux/directrory/directorySelector"

const Directory = ({ sectionsProps }) => {

    // const [state, setState] = useState(data)

    // console.log("Directory", state)
    console.log("Directory", sectionsProps)
    return <div className="directory-menu">
        {
            // state.map((item) => (
            //     <Menuitem key={item.id} {...item} />
            // ))
            sectionsProps.map((item) => (
                <Menuitem key={item.id} {...item} />
            ))
        }
    </div>
}

const mapStateToProps = (state) => {
    return (
        { sectionsProps: selectDirectorySections(state) }
    )
}


export default connect(mapStateToProps)(Directory);