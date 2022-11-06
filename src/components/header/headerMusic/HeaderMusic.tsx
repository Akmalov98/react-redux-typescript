import React from 'react'
import S from './HeaderMusic.module.css'
import {IoMusicalNotesOutline} from 'react-icons/io5'

const HeaderMusic = () => {
  return (
    <div className={S.music}>
        <IoMusicalNotesOutline className={S.musicIcon}/>
    </div>
  )
}

export default HeaderMusic
