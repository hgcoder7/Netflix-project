import React, { useRef } from 'react';
import './SignUpScreen.css';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const register= async (e) =>{
        e.preventDefault();

        await createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>
            alert(error.message)
        );
       
    };
    const signIn = async (e)=>{
        e.preventDefault();
        await signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>
            alert(error.message)
        );

        
    }
  return (
    <div className='signUpScreen'>
      
      <form>
        <h1>Sign In</h1>
      <input ref={emailRef} type='email' placeholder='Email' autoComplete='on'/>
      <input ref={passwordRef} type="password" placeholder='Password'autoComplete='on'/>
      <button type='submit' onClick={signIn}>SignIn</button>
      <h4>
      <span className='signUpScreen_gray'>New to Netflix? </span> 
      <span className='signUpScreen_link' onClick={register}>Sign up now.</span>
      </h4>
      </form>
      </div>
  )
}

export default SignUpScreen
