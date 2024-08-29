import React, { useState } from "react";
import './Styles//Appcontainer.css';
import Header from "./Header.js";
import Textbody from "./Textbody.js";
import InputBar from "./InputBar.js";
import { count } from "firebase/firestore";
import { useLocation } from "react-router-dom";


export default function Appcontainer() {
    const [messagecount, setmesagecounter] = useState(0);
    const location= useLocation();
   const sessionState = location.state;
    const sessionID = sessionState ? sessionState.sessionID : undefined;
    const HandleMessages = (msgcount) => {
       
        

        setmesagecounter(msgcount);   
    }
    
    return (
        <div className="Appcontainer">
            <Header />
            <Textbody Messagetracker={messagecount} sessionID={sessionID} />
            <InputBar onSend={HandleMessages} sessionID={sessionID}/>
        </div>
    );
}