import React from 'react'
import S from './Story.module.css'
import {AiFillLike} from 'react-icons/ai'
import {AiFillDislike} from 'react-icons/ai'
import { story } from '../../../../store/reducers/postReducer'

const Story = (props: story) => {
  return (
    <div className={S.story}>
        <div className={S.storyDiv}>
            <div className={S.authorInformation}>
            <div className={S.storyImgDiv}>
            <img src="https://e7.pngegg.com/pngimages/556/742/png-clipart-avatar-youtube-8-ball-pool-user-avatar-child-face.png"
                alt='' className={S.storyImg}/>
                </div>
                <div className={S.AuthorDiv}>
                    Author
                </div>
            </div>
                {props.message}
            <div className={S.likesDislikesDiv}>
                <div className={S.likesDiv}>
                    <AiFillLike className={S.likes}/>
                    <div className={S.likesCount}>
                        {props.likesCount}
                    </div>
                </div>
                <div className={S.dislikesDiv}>
                    <AiFillDislike className={S.dislikes}/>
                    <div className={S.dislikesCount}>
                        {props.dislikesCount}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story
