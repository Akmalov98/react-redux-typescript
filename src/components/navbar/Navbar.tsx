import React from 'react'
import { NavLink } from 'react-router-dom'
import Friends from './friends/Friends'
import Groups from './groups/Groups'
import Messenger from './messenger/Messenger'
import Music from './music/Music'
import MyProfile from './myProfile/MyProfile'
import S from './Navbar.module.css'
import News from './news/News'
import Photos from './photos/Photos'

const Navbar = () => {
  return (
    <nav className={S.nav}>
        <NavLink to="/content">
            <MyProfile/>
        </NavLink>            
        <NavLink to="/newsContent">
            <News/>
        </NavLink>
        <NavLink to="/dialogs">
            <Messenger/>
        </NavLink>
        <NavLink to="/friendsList">
            <Friends/>
        </NavLink>
        <NavLink to="/groupsList">
            <Groups/>
        </NavLink>
        <NavLink to="/musicsList">
            <Music/>
        </NavLink>
        <NavLink to="/photosList">
            <Photos/>
        </NavLink>
    </nav>
  )
}

export default Navbar
