import "./Styles/Frontpagebutton.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { UsesendsessiontoFB, UpdatesessioncountertoFB } from "../../Backend/FirebaseIO.js";

export default function Frontpagebutton() {
    const navigate = useNavigate();
    let [sessionsArray, setSessionArray] = useState(() => []);
    let sessionuniqueID = useRef();

    useEffect(() => {
        if (localStorage.getItem("Sessioncount") === null) {
            localStorage.setItem("Sessioncount", 0);
        }
        
        if (localStorage.getItem("UniquesessID") === null) {
            const onedate = new Date();
            let randomNum3 = Math.floor(Math.random() * 1000);
            let randomNumt = Math.floor(Math.random() * 1000);
            let randomNumm = Math.floor(Math.random() * 1000);
            let Usernametemp = localStorage.getItem("userName");
            sessionuniqueID.current = `${randomNumt}-${onedate}-${Usernametemp}-${randomNum3}-${randomNumm}`;
            localStorage.setItem("UniquesessID", sessionuniqueID.current);
        } else {
            sessionuniqueID.current = localStorage.getItem("UniquesessID");
        }
    }, []);

    const handleclick = async () => {
        let Username = localStorage.getItem("userName");
        let uniqueID = localStorage.getItem("uniqueID");
        let currentuserid= localStorage.getItem('uniqueID');

        let randomNum = Math.floor(Math.random() * 1000);
        let randomNum2 = Math.floor(Math.random() * 1000);
        const sessionID = `${uniqueID}-${randomNum2}-${Username}-${randomNum}`;
        localStorage.setItem("SessionID", sessionID);

        let sessionCount = localStorage.getItem('Sessioncount');
        let sessionsCount = parseInt(sessionCount);

        const chatsessionid = `sessions${sessionsCount}`;
        const currentDate = new Date();

        const newchatMessage = { [chatsessionid]: { session: sessionID, sessioncreationDate: currentDate } };
        UsesendsessiontoFB(newchatMessage, sessionuniqueID.current,currentuserid);

        let sessionNum = sessionsCount + 1;
        const sessioncount = { sessioncount: { count: sessionNum } };

        UpdatesessioncountertoFB(sessioncount, sessionuniqueID.current,currentuserid);
        localStorage.setItem('Sessioncount', sessionNum);

        navigate("/TayAI");
    };

    return (
        <button className="FrontpageButton" type="button" onClick={handleclick}>
            Get started with Chat!
        </button>
    );
}
