import React from 'react'
import S from './Messenger.module.css'
import {TbMessageCircle2} from 'react-icons/tb'

const Messenger = () => {
  return (
    <div className={S.messenger}>
        <div className={S.messengerIconDiv}>
            <TbMessageCircle2 className={S.messengerIcon}/>
        </div>
        <div className={S.messengerDiv}>
           Messenger
        </div>
    </div>
  )
}

export default Messenger
