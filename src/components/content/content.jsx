import React from 'react'
import S from './content.module.css'
import Stories from './stories/stories'
import ProfileInfo from './profileInfo/profileInfo'
const Content = (props) => {

    return (
      <div className={S.content}>
        <ProfileInfo/>
        <Stories stories={props.stories} key={props.stories.id}/>
      </div>
    )
}

export default Content; 