import React from 'react'
import './Header.css'

import logo from './images/linkedin-logo.svg';
//import avatar from './images/avatar.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SearchIcon from '@mui/icons-material/Search';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useDispatch} from 'react-redux';
import { logout} from "./features/userSlice"
import { auth } from './firebase';

function Header() {

  const dispatch = useDispatch();
  const logoutOfApp  = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className = 'header'>
      

      <div className = "header__left">
        <img src = {logo} alt = ""></img>

        <div className = "header__search">
          <SearchIcon />
          <input placeholder="Search" type = "text"></input>
        </div>
      </div>

      <div className = "header__right">
        <HeaderOption Icon = {HomeIcon} title = "Home"/>
        <HeaderOption Icon = {SupervisorAccountIcon} title = "My Network"/>
        <HeaderOption Icon = {BusinessCenterIcon} title="Jobs " />
        <HeaderOption Icon = {ChatIcon} title="Messaging" />
        <HeaderOption Icon = {NotificationsIcon} title="Notifications" />
        <HeaderOption avatar = {true} title="Me" onClick={logoutOfApp}/>
      </div>

    </div>
  )
}

export default Header
