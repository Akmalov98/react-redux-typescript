import React from 'react'
import { NavLink } from 'react-router-dom'
import S from './DialogItem.module.css'

const DialogItem = () => {
  return (
    <div>
        <NavLink to='/dialogs/1'>
        <div className={S.dialog}>
        <div className={S.dialogPersonAvatarDiv}>
        <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
            alt=''   className={S.dialogPersonAvatarImg}
            />
        </div>
        <div  className={S.dialogPersonNameMessageCountDiv}>                      
            <div className={S.dialogPersonNameDiv}>
                name
             </div>
            <div className={S.dialogMessageCountDiv}>
                <div className={S.dialogMessage}>
                    message
                </div>
           </div>
        </div>
    </div>
    </NavLink>
    </div>
  )
}

export default DialogItem
