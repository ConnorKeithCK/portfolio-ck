import React from "react";
import ToolbarStyle from "../styles/Toolbar.module.css"
import { BiHomeAlt } from 'react-icons/bi'

function Toolbar() {

    return (
        <div className={ToolbarStyle["toolbar"]}>
            <BiHomeAlt className={ToolbarStyle['homeIcon']} size={20} color="white"/>
        </div>

        // TODO: Home icon top left, other icons?
    )
}

export default Toolbar