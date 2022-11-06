import React from 'react'
import S from './Groups.module.css'
import {HiOutlineUserGroup} from 'react-icons/hi'

const Groups = () => {
  return (
    <div className={S.groups}>
        <div className={S.groupsIconDiv}>
            <HiOutlineUserGroup className={S.groupsIcon}/>
        </div>
        <div className={S.groupsDiv}>
             Groups
        </div>
</div>
  )
}

export default Groups
