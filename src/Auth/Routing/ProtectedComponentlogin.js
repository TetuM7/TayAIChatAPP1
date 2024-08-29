import React from "react";
import { Navigate } from 'react-router-dom';


export default function ProtectedCompontentlogin({children})
{   
    const isloggedin = localStorage.getItem('isLoggedIn')

    if ( !isloggedin)
    {
        return <Navigate to='/'/>

    }

return children;



};