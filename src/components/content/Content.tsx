import React from 'react'
import S from './Content.module.css'
import ProfileInfo from './profileInfo/ProfileInfo'
import Stories from './stories/Stories'

const Content = () => {
  return (
    <div className={S.content}>
        <ProfileInfo/>
        <Stories/>
    </div>
  )
}

export default Content
