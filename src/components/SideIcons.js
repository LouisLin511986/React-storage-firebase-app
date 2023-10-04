import React from "react"
import './SideIcons.css'
import AddIcon from '@material-ui/icons/Add';

const SideIcons = () => {
    return (
        <div className="sideIcons">
            <div className="sideIcons__top">
                <a href="https://mail.google.com/" target="_blnak" rel="noreferrer">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                        alt="Gmail" />
                </a>
                <a href="https://calendar.google.com/" target="_blank" rel="noreferrer">
                <img
                    src="https://fonts.gstatic.com/s/i/productlogos/calendar_2020q4/v13/192px.svg"
                    alt="Calendar" />
                </a>
                <a href="https://meet.google.com/" target="_blank" rel="noreferrer">
                    <img
                        src="https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v1/web-96dp/logo_meet_2020q4_color_2x_web_96dp.png"
                        alt="Meet" />
                </a>
            </div>
            <hr />
            <div className="sideIcons__plusIcon">
                <AddIcon />
            </div>
        </div>
    )
}

export default SideIcons