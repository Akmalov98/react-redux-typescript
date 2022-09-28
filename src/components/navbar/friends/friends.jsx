import React from "react";
import S from './friends.module.css'
import {MdPeopleOutline} from 'react-icons/md'

const Friends = () => {
    return (
        <div className={S.friends}>
            <div className={S.friendsIconDiv}>
                <MdPeopleOutline className={S.friendsIcon}/>
            </div>
            <div className={S.friendsDiv}>
                Friends
            </div>
      </div>
    )
}

export default Friends