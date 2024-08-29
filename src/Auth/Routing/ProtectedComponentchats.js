import React from "react";
import { Navigate } from 'react-router-dom';


export default function ProtectedCompontentchats({children})
{   
    const isloggedin = localStorage.getItem('isLoggedIn')

    if ( !isloggedin)
    {
        return <Navigate to='/'/>

    }
    const sessioncount=localStorage.getItem('Sessioncount')
//setusername(username);

     if(sessioncount==0 )
    {

return <Navigate to='/Welcomepage'/>



    }


return children



};