import React from "react";
import S from './navbar.module.css'
import MyProfile from "./myProfile/myProfile";
import News from "./news/news";
import Messenger from "./messenger/messenger";
import Friends from "./friends/friends";
import Groups from "./groups/groups";
import Music from "./music/music";
import Photos from "./photos/photos";
import {NavLink} from 'react-router-dom'
// const setActive = ({isActive}) => ({
//   color: isActive ? 'green' : '',
//   background: isActive ? 'green' : ''
// })

const Navbar = () => {
    return (
      <nav className={S.nav}>
        <NavLink to="/content" /*style={setActive}*/>
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