import './Styles/InputBar.css';
import addIcon from '../Icons/plus.svg';
import sendIcon from '../Icons/send.svg';
import React, { useState } from 'react';
import { RequestChatGpt } from '../Backend/chatfunctionality.js';
import { UsesendtoFB, UsereceiveFB, UpdatecountertoFB } from "../Backend/FirebaseIO.js";

export default function InputBar({ onSend }) {

  const [Message, setMessage] = useState('');
  const [Msgcount, setMsgcount] = useState(0);
  const [Loading, setLoading] = useState(false);
  const [disabled, setdisabled]= useState(false)

  const HandleSend = async () => {
           const sessionID= localStorage.getItem('SessionID')
           const currentuserid= localStorage.getItem('uniqueID')
    if (Message.trim()) {
      const messageid = `Message${Msgcount}`;
      const newMessage = { [messageid]: { role: 'user', content: Message } };

      UsesendtoFB(newMessage,sessionID,currentuserid);
      setLoading(true);

      onSend(Msgcount);

      try {
        const fbdata = await UsereceiveFB(messageid,sessionID,currentuserid);
        const chatresponse = await RequestChatGpt(fbdata.content);
        const chatmessageid = `Message${Msgcount + 1}`;
        const newchatMessage = { [chatmessageid]: { role: 'assistant', content: chatresponse.content } };
        const chatcount = { messagecount: { count: Msgcount} };
        UsesendtoFB(newchatMessage,sessionID,currentuserid);
        setLoading(false);
        UpdatecountertoFB(chatcount,sessionID,currentuserid)
        onSend(Msgcount + 1);

        

      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        setLoading(false);
      }

      setMsgcount(prevCount => prevCount + 2);

      setMessage('');
    }
    
  };

  return (
    <div className='InputBar'>
      <div className='InputBarbarContainer'>
        <div className='AddMediaButton'>
          <img src={addIcon} alt="Add" />
        </div>

        <div className='Inputsection'>
          <input
            type="text"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            id="light-grey-input"
            placeholder="Type HERE!!..."
            disabled={disabled}
          />
        </div>

        <div className='sendButton' onClick={HandleSend}>
          <img src={sendIcon} alt="Send" />
        </div>
      </div>
    </div>
  );
}
