import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword,signOut, onAuthStateChanged,signInWithEmailAndPassword,sendPasswordResetEmail } from 'firebase/auth';
import {useEffect, useState } from 'react';

const firebaseconfig = {
  apiKey: "AIzaSyCzzekGelAuqBx7h2p6J0a78qlg62kGH-I",
  authDomain: "login-page-c4bb2.firebaseapp.com",
  projectId: "login-page-c4bb2",
  storageBucket: "login-page-c4bb2.appspot.com",
  messagingSenderId: "785912342919",
  appId: "1:785912342919:web:819854d29b0e37c4724b22"
}
const app = initializeApp(firebaseconfig);
const auth = getAuth();

export function signup(email,password){
  return createUserWithEmailAndPassword(auth,email,password);
} 

export function login(email,password){
  return signInWithEmailAndPassword(auth,email,password);
}

export function logout(){
  return signOut(auth);
}

export function resetPassword(email){
    return sendPasswordResetEmail(auth,email);
}

export function useAuth(){
  const[currentUser,setCurrentUser] = useState();

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,user=>setCurrentUser(user));
    return unsub;
  },[])
  
  return currentUser;
}
export default app;