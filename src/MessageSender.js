import { Avatar } from '@material-ui/core';
import React,{useState} from 'react'
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./Stateprovider";
import firebase from "firebase"
import db from "./firebase"
function MessageSender() {
    const[input , setinput]=useState('');
    const[imageurl,setimageurl]=useState('');
    const[{user},dispatch]=useStateValue('');
    const handlesubmit=(e)=>{
        e.preventDefault();
         db.collection('posts').add({
             message:input,
             timestamp:firebase.firestore.FieldValue.serverTimestamp(),
             profilepic:user.photoURL,
             username:user.displayName,
             image:imageurl
         })
        setinput('');
        setimageurl('');
    }
    return (
        <div className="messagesender">
            <div className="messagesender_top">
            <Avatar src={user.photoURL}/>
            <form>
                <input  value={input}
                onChange={e=>setinput(e.target.value)}
                className="messagesender_input" type="text"
                    placeholder={`what's on your mind ? ${user.displayName}`}
                />
                <input
                    value={imageurl}
                    onChange={e=>setimageurl(e.target.value)}
                    placeholder="image url"
                />
                <button type="submit" onClick={handlesubmit}>hidden submit</button>
            </form>
            </div>
            <div className="messagesender_bop">
             <div className="messagesender_option">
           <VideocamIcon style={{color:"red"}}/>
           <h3>Live Video</h3>
             </div>
             <div className="messagesender_option">
             <PhotoLibraryIcon style={{color:"green"}}/>
             <h3>Photo/Video</h3>
             </div>
             <div className="messagesender_option">
             <InsertEmoticonIcon style={{color:"orange"}}/>
             <h3>felling/Activity</h3>
             </div>
            </div>
        </div>
    )
}

export default MessageSender
