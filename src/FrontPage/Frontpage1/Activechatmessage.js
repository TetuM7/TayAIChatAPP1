
import { Timestamp } from "firebase/firestore";
import blackmanicon7 from "../../Icons/black-man.svg";
import"./Styles/Activechatmessage.css"
import { useEffect, useState } from "react";
import { Usesubscribefirebase, Usesubscribesessionsfirebase } from "../../Backend/FirebaseIO.js";
import { useNavigate } from "react-router-dom";
export default function Activechatmessage(){
     let UniqueID =localStorage.getItem("UniquesessID");
     const currentuserid= localStorage.getItem('uniqueID')

    const navigate= useNavigate();
      const [recentMessage, setRecentMessage] = useState("");
         const [RecentSession, setRecentsession] = useState("");

         useEffect(() => {
            const getrecentmessage = async () => {
                try {
                    const sessionsdata = await Usesubscribesessionsfirebase(UniqueID, currentuserid);
                    if (sessionsdata && sessionsdata.length > 0) {
                        let recentsession = sessionsdata[sessionsdata.length - 1].session;
                        setRecentsession(recentsession);
        
                        const sessionmessages = await Usesubscribefirebase(recentsession, currentuserid);
                        
                        if (sessionmessages && sessionmessages.length > 1) {
                            const recentmessg = sessionmessages[sessionmessages.length - 2];
                            setRecentMessage(recentmessg);
                        } else {
                            setRecentMessage(""); // Set to empty if no previous messages
                        }
                    } else {
                        setRecentMessage(""); // Set to empty if no sessions exist
                    }
                } catch (error) {
                    console.error("Error fetching recent message:", error);
                }
            };
            getrecentmessage();
        }, [UniqueID, currentuserid]);
        
       const HandleClick=()=>{
            navigate('/TayAI')
                    localStorage.setItem("SessionID", RecentSession);


        }
    const lastmessage=recentMessage.content;
          const charLimit = 300;

const shortmessage= lastmessage ? lastmessage.substring(0, charLimit) + (lastmessage.length > charLimit ? "..." : "") : "";

   return (
        <div className="Activechatchatcontainer" onClick={HandleClick}>
            <div className={"ActivechatChatMessageChatbot"}>
                
                    <div className="Activechaticon-container2">
                        <img src={blackmanicon7} alt="Bot Icon" className="Activechaticon2" />
                    </div>
                
                    <div className="Activechatmessage-contentChatbot">
    <h1>Tay AI <span className="Activechattimestamp">{Timestamp}</span></h1>
    <h2>{recentMessage.role}</h2>
    <p>{shortmessage}</p>
</div>


            </div>
        </div>
    );
}