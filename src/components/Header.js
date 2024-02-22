import React, { useEffect } from 'react';
import {onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className='absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
      <img className='w-40' src="https://static.vecteezy.com/system/resources/previews/019/956/198/original/netflix-transparent-netflix-free-free-png.png" alt="logo" />
      {
        user && (<div className='flex'>
          <img  className="w-12 h-12 m-auto mx-1" src={user?.photoURL} alt="User Logo"/>
          <button className='text-2xl font-bold text-red-500' onClick={handleSignOut}>Sign Out</button>
        </div>)
      }
    </div>
  )
}

export default Header