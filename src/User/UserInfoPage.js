import React from 'react';
import "./UserInfoPage.css";
import FrontpageHeader from '../FrontPage/Frontpage1/FrontpageHeader.js';
import user from"../Icons/man.svg"

export default function UserInfoPage() {
    const name = localStorage.getItem('userName');
        const email = localStorage.getItem('userEmail');
    const datesignedup = localStorage.getItem('uniqueID');

    const userData = {
        name: name,
        email: email,
        dateSignedUp:datesignedup,
    };

    return (
        <div className="userpagecontainer">
            <FrontpageHeader></FrontpageHeader>
        <div className="userInfoPage">
            <div className="userIcon"><img src={user}></img></div>
            <h1>User Information</h1>
            <div className="userInfo">
                <div className="infoItem"><strong>Name:</strong> {userData.name}</div>
                <div className="infoItem"><strong>Email:</strong> {userData.email}</div>
                <div className="infoItem"><strong>Date Signed Up:</strong> {userData.dateSignedUp}</div>
            </div>
        </div>
        </div>
    );
}