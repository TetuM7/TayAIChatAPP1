import "./Styles/alternatefrontpage.css"

import FrontpageHeader from '../Frontpage1/FrontpageHeader.js'
import welcomeIcon from '../../Icons/welcomeIcon.svg'
import Frontpagebutton from "../Frontpage1/Frontpagebutton.js"
import { Navigate } from 'react-router-dom';


export default function Alternatefrontpage(){


    const isloggedin = localStorage.getItem('isLoggedIn')

    if ( !isloggedin)
    { return <Navigate to='/'/>}



    return(<div className="alternatefrontpage">

<FrontpageHeader> </FrontpageHeader>
<div className="welcomeIconContainer">
    
    <img src={welcomeIcon}></img>
</div>
    <Frontpagebutton></Frontpagebutton>
    </div>)
}