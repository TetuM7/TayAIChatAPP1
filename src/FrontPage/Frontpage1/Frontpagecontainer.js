import FrontpageHeader2v from './FrontpageHeader2v.js'
import './Styles/Frontpagecontainer.css'
import Activechats from './Activechats.js'
import Endedchats from './Endedchats.js'
import Frontpagebutton from './Frontpagebutton.js'
import Alternatefrontpage from '../Frontpage2/Alternatefrontpage.js'
import { cleardatabase } from '../../Backend/FirebaseIO.js'
import { deleteUser } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function Frontpagecontainer({user}) {
    const navigate=useNavigate();
    const [uniqueID, setUniqueID] = useState('');
    const sessioncount = localStorage.getItem('Sessioncount');
    const [isexit, setisexit]=useState(false);
    const currentuserid= localStorage.getItem('uniqueID')

    const handleConfirmation = async() => {        
        try{
            localStorage.setItem('isLoggedIn', false);
            await deleteUser(user) 
            await cleardatabase(currentuserid)  
            navigate('/')    
             localStorage.clear();
             
        }
        catch(error)
        {console.log(error)}
       
        setisexit(false);   

         
 };
    
      const handleCancel = () => {
        setisexit(false);
      };
      
console.log(isexit);
    if (sessioncount == 0) {
        return (<Alternatefrontpage />);
    }
    if (isexit) {
        return (
          <div className="overlay">
            <div className="confirmation-box">
              <p>Are you sure you want to exit?</p>
              <button onClick={handleConfirmation}>Yes</button>
              <button onClick={handleCancel}>No</button>
            </div>
          </div>
        );}
    return (
        <div className="Frontpagecontainer">
            <FrontpageHeader2v setexit={setisexit}></FrontpageHeader2v>
            <Activechats uniqueID={uniqueID} />
            <Endedchats uniqueID={uniqueID} />
    <Frontpagebutton getUniqueID={setUniqueID}></Frontpagebutton>
        </div>
    );
}
