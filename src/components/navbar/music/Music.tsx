import React from 'react'
import S from './Music.module.css'
import {BsMusicPlayer} from 'react-icons/bs'

const Music = () => {
  return (
    <div className={S.music1}>
        <div className={S.musicIconDiv1}>
            <BsMusicPlayer className={S.musicIcon1}/>
        </div>
        <div className={S.musicDiv1}>
            Music
        </div>
    </div>
  )
}

export default Music
