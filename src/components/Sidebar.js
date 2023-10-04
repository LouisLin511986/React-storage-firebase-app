import React from "react";
import FileComponent from "./FileComponent";
import SidebarItem from "./SidebarItem";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DeleteOutLineIcon from "@material-ui/icons/DeleteOutline";
import StorageIcon from "@material-ui/icons/Storage";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <FileComponent />
            <div className="sidebar__itemsContainer">
                <SidebarItem arrow icon={(<InsertDriveFileIcon />)} lable={'My Drive'} />
                <SidebarItem arrow icon={(<ImportantDevicesIcon />)} lable={'Computers'} />
                <SidebarItem icon={(<PeopleAltIcon />)} lable={'Shared with me'} />
                <SidebarItem icon={(<QueryBuilderIcon />)} lable={'Recent'} />
                <SidebarItem icon={(<StarBorderIcon />)} lable={'Starred'} />
                <SidebarItem icon={(<DeleteOutLineIcon />)} lable={'Bin'} />
                <hr />
                <SidebarItem icon={(<StorageIcon />)} lable={'Storage'} />
            </div>
        </div>
    )
}

export default Sidebar;