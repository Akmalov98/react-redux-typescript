import React from 'react'
import S from './Header.module.css'
import HeaderMusic from './headerMusic/HeaderMusic'
import Notifications from './notifications/Notifications'
import SearchInput from './searchInput/SearchInput'

const Header = () => {
  return (
    <header className={S.header}>
        <img src="https://logos-download.com/wp-content/uploads/2021/06/Vkontakte_Logo_2006.png"
           placeholder='изображение vk-logo' alt='vk icon'/>  
        <SearchInput/>
        <Notifications/>
        <HeaderMusic/>         
    </header>
  )
}

export default Header
