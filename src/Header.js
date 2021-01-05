import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { Avatar,IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from "./Stateprovider";
function Header() {
    const[{user},dispatch]=useStateValue('');
    return (
        <div className="app">
        <div className="app_left">
         <img  src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
           alt="facebook"
         />
         <div className="app_format">
             <SearchIcon/>
             <input type="text" placeholder="search facebook"/>
         </div>
        </div>
        <div className="app_middle">
          <div className="app_mid app_active">
          <HomeIcon fontSize="large" />
          </div>
          <div className="app_mid">
           <FlagIcon fontSize="large" />
          </div>
            <div className="app_mid">
             <SubscriptionsIcon fontSize="large"/>
            </div>
           <div className="app_mid">
               <StorefrontOutlinedIcon fontSize="large" />
           </div> 
           <div className="app_mid">
               <SupervisedUserCircleOutlinedIcon fontSize="large"/>
           </div>
        </div>
        <div className="app_right">
          <div className="app_info">
              <Avatar src={user.photoURL}/>
              <h4>{user.displayName}</h4>
          </div>
          <IconButton>
              <AddIcon/>
          </IconButton>
          <IconButton>
              <ForumIcon/>
          </IconButton>
          <IconButton>
              <NotificationsActiveIcon/>
          </IconButton>
          <IconButton>
              <ExpandMoreIcon/>
          </IconButton>
        </div>
    </div>
    )
}

export default Header
