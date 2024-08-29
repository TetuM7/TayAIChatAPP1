import { getDatabase, set, ref,update, onValue, get, remove } from "firebase/database";
import { initializeApp } from "firebase/app";
import { useState } from "react";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    export function UsesendtoFB (newMessage,sessionID,currentuserid){
    const reference= ref(database, `Chatsessions${currentuserid}/${sessionID}/`);
    update(reference,newMessage);
}

export function UpdatecountertoFB (counterobject,sessionID,currentuserid){
    const reference= ref(database, `Chatsessions${currentuserid}/${sessionID}/`);
    update(reference,counterobject);
}
export function UpdatesessioncountertoFB (counterobject,uniqueID,currentuserid){
    const reference= ref(database, `Chatsessions${currentuserid}/sessioncount--${uniqueID}/`);
    update(reference,counterobject);
}


   export async function UsereceiveFB(messageid,sessionID,currentuserid){
   
    const reference = ref(database, `Chatsessions${currentuserid}/${sessionID}/${messageid}`);;
   try { 
    const snapshot= await get(reference)
    return snapshot.val();
    } catch (error) {
        console.error("Error fetching data from Firebase:", error);
        throw error;
    }
}

export async function Usesubscribefirebase(sessionID,currentuserid) {

    const reference = ref(database,`Chatsessions${currentuserid}/${sessionID}/`);
     try{   
    const subscribe= await get(reference)
    
            const FBdata = subscribe.val();
            
            const Fbdatatarray= Object.values(FBdata)
            return Fbdatatarray;
        
    }
    catch (error) {
        console.error("Error fetching data from Firebase:", error);
        throw error;
    }
    
    }

    export function UsesendsessiontoFB (newMessage,uniqueID,currentuserid){
        const reference= ref(database, `Chatsessions${currentuserid}/SessionsList${uniqueID}`);
        update(reference,newMessage);
    }      
        


    export async function Usesubscribesessionsfirebase(uniqueID,currentuserid) {

        const reference = ref(database, `Chatsessions${currentuserid}/SessionsList${uniqueID}`);
         try{   
        const subscribe= await get(reference)
        
                const FBdata = subscribe.val();
                const Fbdatatarray= Object.values(FBdata)
                return Fbdatatarray;
            
        }
        catch (error) {
            console.error("Error fetching data from Firebase:", error);
            throw error;
        }
        
        }
    
export async function  cleardatabase(currentuserid){

const reference=  ref(database,`Chatsessions${currentuserid}/`)
try{

    await set(reference,null)
}

catch(error){
    console.log(error)
}

}
      