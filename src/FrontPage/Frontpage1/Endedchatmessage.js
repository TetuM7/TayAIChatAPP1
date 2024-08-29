
import { Timestamp } from "firebase/firestore";
import blackmanicon7 from "../../Icons/black-man.svg";
import"./Styles/Endedchatmessage.css"
import { useNavigate } from "react-router-dom";

export default function Endedchatmessage({RecentSession, RecentMessage, role}){
    const navigate= useNavigate();
     const charLimit = 100;

const shortmessage= RecentMessage ? RecentMessage.substring(0, charLimit) + (RecentMessage.length > charLimit ? "..." : "") : "";

 const HandleClick=()=>{
            navigate('/TayAI')
                    localStorage.setItem("SessionID", RecentSession);
   
        }

   return (
        <div className="chatcontainer1" onClick ={HandleClick}>
            <div className={"ChatMessageChatbot1"}>
                
                    <div className="icon-container1">
                        <img src={blackmanicon7} alt="Bot Icon" className="icon1" />
                    </div>
                
                    <div className="message-contentChatbot1">
    <h1>Tay AI <span className="timestamp1">{Timestamp}</span></h1>
        <h2>{role}</h2>
    <p>{shortmessage}</p>
</div>


            </div>
        </div>
    );
}