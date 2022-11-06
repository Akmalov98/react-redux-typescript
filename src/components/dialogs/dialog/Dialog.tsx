import React from 'react'
import { IoSend } from 'react-icons/io5'
import S from './Dialog.module.css'

const Dialog = () => {
  return (
    <div className={S.dialog}>
        <div className={S.userInfo}>
        </div>
            message
        <div className={S.dialogTextareaButton}>
            <div className={S.textareaDiv}>
                <textarea 
                    className={S.textarea}
                   placeholder="write message"
                    >
                    
                    </textarea>
                </div>
            <div className={S.dialogbuttonIcon}>
            <button 
                className={S.button}
                >
                     <IoSend className={S.icon}/>
            </button>
        </div>
    </div>
</div>
  )
}

export default Dialog
