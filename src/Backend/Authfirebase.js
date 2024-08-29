import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, createUserWithEmailAndPassword,updateProfile,deleteUser } from "firebase/auth";
import { initializeApp } from "firebase/app";


let User;
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
    const auth = getAuth(app);

export default async function SigninUser(Name,email,password){
try{
const userCredential= await createUserWithEmailAndPassword(auth,email,password)
  User= userCredential.user;

await updateProfile(User, {displayName:Name})

return(User);
}
catch(error)  {
   
  console.error("Error signing in:", error.code, error.message);
        throw error; 
}
}
   

export async function deleteusers(user) {
  if (!user) {
    console.error('No user is currently stored in the global User variable.');
    return;
  }

  try {
    await deleteUser(user);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}