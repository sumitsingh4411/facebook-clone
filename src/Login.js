import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import { auth, provider  } from "./firebase";
import {useStateValue} from "./Stateprovider"
import {actionTypes} from "./reducer"

function Login() {
    const[{},dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider).then( (result) =>{
             dispatch({
                 type :actionTypes.SET_USER,
                 user :result.user
             });
        }).catch((error)=>{
            alert(error.message);
        })
    }
    return (
        <div className="login">
             <div className="login_container">
        <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
         alt=""       />
         <div className="login_text">
             <img
                 src="data:image/png;base64,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"
                 alt="facebook"
             />
         </div>
            <Button onClick={signIn}>
                Sign In
            </Button>
             </div>
        </div>
    )
}

export default Login
