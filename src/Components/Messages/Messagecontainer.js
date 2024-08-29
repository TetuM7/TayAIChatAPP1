import React, { useState } from "react";
import '../Styles/Messagecontainer.css'
import ChatMessage from './Message.js';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect } from "react";
import { Usesubscribefirebase } from "../../Backend/FirebaseIO.js";




    export default function MessageContainer({ Messagetracker }) {
        let UserName=localStorage.getItem('userName');
        const currentuserid= localStorage.getItem('uniqueID')

            const [messagearray, setmessagearray]=useState([{  role:"Assistant",content: `Hello ${UserName}, How can I help you`,}])
            const [localmessagearray, setlocalmessagearray]=useState([{"session":"content" }])

       
        useEffect(()=>{    
             let sessionID= localStorage.getItem('SessionID');
            const accesssfullDB = async(sessionID)=>
                {try 
                    {
                        const FBdata= await Usesubscribefirebase(sessionID,currentuserid)
                        if (FBdata)
                            {
                                    
                                setmessagearray(FBdata);
                                
                       }
else {
                    setmessagearray([{  role:"Assistant",content: "Hello How can I help you",}]); // Ensure it's an empty array if no messages are found
                 }
                    
                       
                    }
                 catch(error)
                    {
                        console.error("Error fetching messages:", error);
                    }
                    
            };
            accesssfullDB(sessionID);
            },[Messagetracker]
        );


        return (
            <div className='MessageContainer'>
                {messagearray.map((msg, index) => (
                    <ChatMessage key={index} message={msg.content} role={msg.role} />
                ))}
            </div>
        );
    }