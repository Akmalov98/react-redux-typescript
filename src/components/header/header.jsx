import React from "react";
import S from './header.module.css'
import SearchInput from "./searchInput/searchInput";
import Notifications from "./notifications/notifications";
import HederMusic from "./headerMusic/headerMusic";
const Header = () => {
    return (
     <header className={S.header}>
        <img src="https://logos-download.com/wp-content/uploads/2021/06/Vkontakte_Logo_2006.png"
           placeholder='изображение vk-logo'/>           
        <SearchInput/>
        <Notifications/>
        <HederMusic/>
     </header>
    )
}

export default Header 