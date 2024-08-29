import React, { useState, useEffect} from 'react';
import './SignInPage.css';
import blackmanicon7 from "../Icons/black-man.svg";
import SigninUser from '../Backend/Authfirebase.js';
import { useNavigate } from 'react-router-dom';

export default function SignInPage ({user, setUser}) {
    const [Name, setName]=useState('');
    const [Email, setEmail]=useState('');
    const [Password, setPassword]=useState('');
    const navigate= useNavigate();

    useEffect(()=>{

        const isLoggedIn= localStorage.getItem('isLoggedIn')
        if(isLoggedIn){
            navigate('/chats');
        }
    },[navigate])






    const Handleclick=async(event)=>{
           event.preventDefault();
if(Name.trim()&& Email.trim()&& Password.trim())
{
        try{

                const User =await SigninUser(Name,Email,Password);
                setUser(User);
                const Username=User.displayName;
                const useremail=User.email;
                const userCreationTime = User.metadata.creationTime;
const randomNum = Math.floor(Math.random() * 100);
const uniqueID = `${randomNum}-${userCreationTime}`;

if(User)
                {
                   
                    localStorage.setItem('userName', Name);
                    localStorage.setItem('userEmail', Email);
                    localStorage.setItem('uniqueID', uniqueID);
                    localStorage.setItem('isLoggedIn', true);
                    localStorage.setItem('Sessioncount', 0);


                }
        }

        

        catch(error)
        {console.log(error)
            throw error}
            setName('');setEmail('');setPassword('');

            navigate('/chats');

    };
    }
   
   
    
   
   
   
   
    return(
    <div className="container">
      <div className="signinlogo"> <div className="signinpageicon-container">
                        <img src={blackmanicon7} alt="Bot Icon" className="signinpageicon" />
                    </div></div>
                    <div className="signinlogotext"><h1>
                      WELCOME TO TAY AI
                    </h1></div>

                    
                  
     <div className="form-container">
        
        <form>
          <input value={Name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name" required />
          <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" required />
          <input value={Password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="setpassword" required />
          <button type="submit" onClick={Handleclick}>Sign Up </button>
        </form>
  
      </div>
    </div>)
  
};


