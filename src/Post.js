import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
function Post({profilepic,image,username,timestamp,message}) {
    return (
        <div className="post">
             <div className="post_top">
                 <Avatar src={profilepic} className="post_avatar"/>
             <div className="post_template">
                 <h3>
                     {username}
                 </h3>
                 <p>
                     {new Date(timestamp?.toDate()).toUTCString()}
                 </p>
             </div>
             </div>
             <div className="post_bottom">
                 <p>{message}</p>
             </div>
             <div className="post_image">
                 <img src={image} alt="image"/>
             </div>
             <div className="post_options">
                 <div className="post_option">
                     <ThumbUpIcon/>
                     <p>like</p>
                 </div>
                 <div className="post_option">
                     <ChatBubbleOutlineOutlinedIcon/>
                     <p>Comment</p>
                 </div>
                 <div className="post_option">
                     <NearMeIcon/>
                     <p>Share me</p>
                 </div>
                 <div className="post_option">
                     <AccountCircleIcon/>
                     <ExpandMoreOutlinedIcon/>
                 </div>
             </div>
        </div>
    )
}

export default Post
