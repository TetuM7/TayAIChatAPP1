import './Styles//Textbody.css'
import MessageContainer from "./Messages/Messagecontainer.js";
import blackmanicon from "../Icons/black-man.svg";

export default function Textbody({ Messagetracker }){


return(<div className='TextBody'>
    <MessageContainer Messagetracker= {Messagetracker}></MessageContainer>
    </div>);



}