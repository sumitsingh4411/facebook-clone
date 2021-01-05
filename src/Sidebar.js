import { ExpandMoreOutlined} from '@material-ui/icons'
import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from "./Stateprovider";
function Sidebar() {
    const[{user},dispatch]=useStateValue('');
    return (
        <div className="sidebar">
            <SidebarRow
                src={user.photoURL}
                title={user.displayName}
            />
            <SidebarRow 
                Icon={LocalHospitalIcon}
                title="covid 19 Information center"
            />
            <SidebarRow
                Icon={EmojiFlagsIcon}
                title="Pages"
            />
             <SidebarRow
                Icon={PeopleIcon}
                title="Friends"
            />
             <SidebarRow
                Icon={ChatIcon}
                title="Messages"
            />
             <SidebarRow
                Icon={StorefrontIcon}
                title="MarketPlace"
            />
             <SidebarRow
                Icon={VideoLibraryIcon}
                title="videos"
            />
             <SidebarRow
                Icon={ExpandMoreOutlined}
                title="MarketPlace"
            />
        </div>
    )
}

export default Sidebar
