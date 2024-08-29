import React from "react";
import "./Styles/Header.css";
import leftarrow from '../Icons/left-arrow.svg';
import blackmanicon7 from "../Icons/black-man.svg";
import settingsicon from '../Icons/setting.svg';
import statsicon from '../Icons/stats.svg';
import { Navigate, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

const HandleClick=()=>{
 navigate('/chats')

}
const Gotostats=()=>{
  navigate('/datapage')
 
 }
 const Gotosettings=()=>{
  navigate("/UserInfo")
 
 }
  return (
    <div className="headercontainer">
      <div className="backArrow" onClick={HandleClick}>
        <img src={leftarrow} alt="Back Arrow"/>
      </div>
      <div className="logo">
      <div className="mainheadericon-container">
                        <img src={blackmanicon7} alt="Bot Icon" className="mainheadericon" />
                    </div>
        <div className="logotext">
          <h1>TAY AI</h1>
          <p className="online">.online</p>
        </div>
      </div>
      <div className="headicons">
        <img src={statsicon} alt="Stats" onClick={Gotostats}/>
        <img src={settingsicon} alt="Settings" onClick={Gotosettings}/>
      </div>
    </div>
  );
}
