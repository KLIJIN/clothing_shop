import React, { useState } from "react";
import "./Directory.scss";
import { data } from "../../data.js"
import Menuitem from "../menu-item/Menu-item";


const Directory = () => {
    const [state, setState] = useState(data)
    console.log(state)
    return <div className="directory-menu">
        {state.map((item) => (
            <Menuitem key={item.id} {...item} />
        )
        )}
    </div>
}

export default Directory;