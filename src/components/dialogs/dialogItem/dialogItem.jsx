import React from "react";
import S from './dialogItem.module.css'
import {NavLink} from 'react-router-dom'
import Dialog from "../dialog/dialog";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return ( 
    <div>
        <NavLink to={path}><div className={S.dialog}>
            <div className={S.dialogPersonAvatarDiv}>
                <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                   className={S.dialogPersonAvatarImg}
                />
            </div>
            <div  className={S.dialogPersonNameMessageCountDiv}>                        
                <div className={S.dialogPersonNameDiv}>
                    {props.name}
                 </div>
                <div className={S.dialogMessageCountDiv}>
                    <div className={S.dialogMessage}>
                        {props.message}
                    </div>
               </div>
            </div>
        </div></NavLink> 
    </div>
    )
}

export default DialogItem