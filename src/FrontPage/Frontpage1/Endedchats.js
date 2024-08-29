import "./Styles/Endedchats.css";
import { useEffect, useState } from "react";
import { Usesubscribefirebase, Usesubscribesessionsfirebase } from "../../Backend/FirebaseIO.js";
import Endedchatmessage from "./Endedchatmessage.js";

export default function Endedchats() {
    let UniqueID =localStorage.getItem("UniquesessID");
    const [recentMessages, setRecentMessages] = useState([]);
    const currentuserid= localStorage.getItem('uniqueID')

    useEffect(() => {
        const getRecentMessages = async () => {
            try {
                const sessionsData = await Usesubscribesessionsfirebase(UniqueID,currentuserid);
                const recentSessions = sessionsData.slice(0, -1);
                
                const messages = await Promise.all(
                    recentSessions.map(async (sess) => {
                        const sessionMessages = await Usesubscribefirebase(sess.session,currentuserid);
                        return {
                            session: sess.session,
                            message: sessionMessages[sessionMessages.length - 2].content,
                            role: sessionMessages[sessionMessages.length - 2].role
                        };
                    })
                );

                setRecentMessages(messages);
            } catch (error) {
                console.error("massive error bro", error);
            }
        };

        getRecentMessages();
    }, []);

    return (
        <div className="Endedchatscontainer">
                <div className="header">Ended Chats</div>

            {recentMessages.map((msgObj, index) => (
                <Endedchatmessage key={index} RecentSession={msgObj.session} RecentMessage={msgObj.message} role={msgObj.role} />
            ))}
        </div>
    );
}
