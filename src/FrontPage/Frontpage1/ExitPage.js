import ActiveChats from './Activechats.js';
import EndedChats from './Endedchats.js';
import { cleardatabase } from '../../Backend/FirebaseIO.js'
import { deleteUser } from 'firebase/auth'
import { Navigate } from 'react-router-dom';
export const handleConfirm = async(uniqueID) => {
        console.log('Exiting...');
        localStorage.clear();
       
        try{
           
            await deleteUser() 
            await cleardatabase(uniqueID)
        }
        catch(error)
        {console.log(error)}
        

        return <Navigate to='/'/>

      };
    
