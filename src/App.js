import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import './App.css';
import Header from "./Header";
import Login from './Login';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { auth } from './firebase';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          dispalyName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } 
      else {
        dispatch(logout());
        // user logged out
      }
    });
  }, [])
  return (
    <div className="app">
      

      {/* Header */}
      <Header />

      {!user ? (<Login />) : (
        <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )}
      

    </div>
  );
}

export default App;
