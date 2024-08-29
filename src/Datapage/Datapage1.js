import './Datapage.css';
import FrontpageHeader from '../FrontPage/Frontpage1/FrontpageHeader.js';
import React, { useEffect, useState } from 'react';
import { Usesubscribefirebase, Usesubscribesessionsfirebase } from "../Backend/FirebaseIO.js";
import Graph from './bargraph.js';

export default function Datapage() {
    let UniqueID = localStorage.getItem("UniquesessID");
    const currentuserid= localStorage.getItem('uniqueID')
    const [recentMessages, setRecentMessages] = useState([]);
    const [Totalcount, setTotalcount] = useState(0);

    useEffect(() => {
        const getRecentMessages = async () => {
            try {
                const sessionsData = await Usesubscribesessionsfirebase(UniqueID,currentuserid);
                
                const messages = await Promise.all(
                    sessionsData.map(async (sess) => {
                        const sessionMessages = await Usesubscribefirebase(sess.session,currentuserid);
                        return {
                            session: sess.session,
                            count: sessionMessages[sessionMessages.length - 1]?.count || 0,
                        };
                    })
                );

                setRecentMessages(messages);
                
                const totalcount = messages.reduce((total, sess) => total + sess.count, 0);
                setTotalcount(totalcount);
            } catch (error) {
                console.error("massive error bro", error);
            }
        };

        getRecentMessages();
    }, [UniqueID]);

    let sessioncount = localStorage.getItem("Sessioncount") || 1; 
    const userData = {
        totalnumberofchats: Totalcount,
        avgchats: Totalcount / sessioncount,
    };

    return (
        <div className='datapagecontainer'>
            <FrontpageHeader />
            <div className='statistics'>
                <h1>Your Statistics</h1> 
                <p>Graph of your the number of Conversations with TAY AI</p>
            </div>
            <div className="graphcontainer">
                <Graph totalcount={Totalcount} sessionCount={sessioncount}/>
            </div>
            <div className="infoItem1"><strong>Total number of chats:</strong> {userData.totalnumberofchats}</div>
            <div className="infoItem1"><strong>Avg chats per session:</strong> {userData.avgchats}</div>
        </div>
    );
}
