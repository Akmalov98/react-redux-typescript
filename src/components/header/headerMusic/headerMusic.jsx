import React from "react";
import S from './headerMusic.module.css'
import {IoMusicalNotesOutline} from 'react-icons/io5'
import {NavLink} from 'react-router-dom'

const HederMusic = () => {
    return (
        <div className={S.music}>
            <NavLink to="/musicsList">
                <IoMusicalNotesOutline className={S.musicIcon}/>
            </NavLink>
        </div>
    )
}

export default HederMusic