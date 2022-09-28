import React from "react";
import S from './myProfile.module.css'
import {CgProfile} from 'react-icons/cg'

const MyProfile = () => {
    return (
        <div className={S.profile}>
            <div className={S.profileIconDiv}>
                <CgProfile className={S.profileIcon}/>
            </div>
            <div className={S.myProfile}>
                My profile
            </div>
      </div>
    )
}

export default MyProfile