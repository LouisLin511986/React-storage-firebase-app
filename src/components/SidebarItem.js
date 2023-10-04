import React from "react";
import './SidebarItem.css'

import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const SidebarItem = ({ arrow, icon, lable }) => {
    return (
        <div className="sidebarItem">
            <div className="sidebarItem__arrow">
                {arrow && (<ArrowRightIcon />)}
            </div>

            <div className="sidebarItem__main">
                {icon}
                <p>{lable}</p>
            </div>
        </div>
    )
}

export default SidebarItem;