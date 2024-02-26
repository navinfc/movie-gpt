import React, { useEffect } from 'react';
import {onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  const handleGptSearchClick = () => {
    // Toggle GPT search button
    dispatch(toggleGptSearchView());
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 mx-auto md:mx-0 bg-none' src={LOGO} alt="logo" />
      {
        user && (
        <div className='flex p-2'>
          <button className='m-2 px-4 bg-cyan-600 text-white h-10 my-auto rounded-lg' onClick={handleGptSearchClick}>GPT Search</button>
          <img  className="w-12 h-12 m-auto mx-1" src={user?.photoURL} alt="User Logo"/>
          <button className='text-2xl font-bold text-red-500' onClick={handleSignOut}>Sign Out</button>
        </div>)
      }
    </div>
  )
}

export default Header