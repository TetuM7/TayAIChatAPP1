import React from "react";
import '../Styles/Message.css';
import blackmanicon7 from "../../Icons/black-man.svg";

export default function ChatMessage({ message, role }) {
    return (
        <div className="chatcontainer">
            <div className={`ChatMessage ${role === 'user' ? 'user' : 'Chatbot'}`}>
                {role !== 'user' && (
                    <div className="icon-container">
                        <img src={blackmanicon7} alt="Bot Icon" className="icon" />
                    </div>
                )}
                <div className={`message-content ${role === 'user' ? 'user' : 'Chatbot'}`}>
                    {message}
                </div>
            </div>
        </div>
    );
}
