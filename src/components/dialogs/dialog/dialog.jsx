import React from "react";
import S from './dialog.module.css'
import { useParams } from "react-router-dom";
import {IoSend} from 'react-icons/io5'
import { useState, useEffect } from "react";


const Dialog = (props) => {
    const {id} = useParams()
    let user = props.dialogs.find(el => el.id == id)
    let newDialogMessage = React.createRef()
    let addMessage = () => {
        let textMessage = newDialogMessage.current.value 
        props.setStateDialog(id, textMessage)
    }
    
    
    return (
        <div className={S.dialog}>
            <div className={S.userInfo}>

            </div>
            {user.messages.map(message => <div>{message}</div>)}
            <div className={S.dialogTextareaButton}>
                    <div className={S.textareaDiv}>
                        <textarea 
                            className={S.textarea}
                            ref={newDialogMessage}
                            placeholder="write message"
                            >
                            
                            </textarea>
                    </div>
                <div className={S.dialogbuttonIcon}>
                    <button 
                        onClick={addMessage}
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