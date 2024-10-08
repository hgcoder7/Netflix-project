
import './App.css';
import React, {  useEffect } from 'react';
 import HomeScreen from './screens/HomeScreen';
 import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import {  useDispatch , useSelector} from 'react-redux';
import { login, logout, selectUser} from './features/userSlice'
import ProfileScreen from './screens/ProfileScreen'
function App() {
  const user = useSelector(selectUser);
  const dispatch =useDispatch();

  useEffect(()=>{
    const unsubscribe =auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        //login in
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        )

      }
      else{
      //login out
      dispatch(logout());
      }
    })

    return unsubscribe;
  },[]);


  return (
    <div className="app">
         
         <Router>
          
      {!user ? (<LoginScreen/>):(
           
        <Routes>
            <Route path="/profile" Component={ProfileScreen}/>
           
          
            <Route exact path="/" Component={HomeScreen}/>
         </Routes>
         
        )}
       
       </Router>
       
    </div>
  );
}

export default App;

