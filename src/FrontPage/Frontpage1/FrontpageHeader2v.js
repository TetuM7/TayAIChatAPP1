import React from "react";
import "./Styles/FrontpageHeader2v.css";
import blackmanicon7 from "../../Icons/black-man.svg";
import settingsicon from '../../Icons/setting.svg';
import statsicon from '../../Icons/stats.svg';
import leftarrow from '../../Icons/left-arrow.svg';
import { Navigate, useNavigate } from "react-router-dom";


export default function FrontpageHeader2v({setexit}) {
  const navigate = useNavigate();

const HandlearrowClick=()=>{
 setexit(true)

}
const Gotostats=()=>{
  navigate('/datapage')
 
 }
 const Gotosettings=()=>{
  navigate("/UserInfo")
 
 }
  return (
    <div className="headercontainerhv">
         <div className="backArrow"  onClick={HandlearrowClick}>
        <img src={leftarrow} alt="Back Arrow"/>
      </div>
      <div className="logo">
      <div className="icon-containerH">
                        <img src={blackmanicon7} alt="Bot Icon" className="iconH" />
                    </div>
        <div className="logotext">
          <h1>TAY AI</h1>
          <p className="online">.online</p>
        </div>
      </div>
      <div className="headicons">
        <img src={statsicon} alt="Stats"  onClick={Gotostats}/>
        <img src={settingsicon} alt="Settings" onClick={Gotosettings}/>
      </div>
    </div>
  );
}
