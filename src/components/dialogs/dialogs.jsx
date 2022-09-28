import React from "react";
import S from './dialogs.module.css'
import DialogItem from "./dialogItem/dialogItem";
import Dialog from "./dialog/dialog";
import { setStateDialog } from "../../redux/state";
import { useState } from "react";

// dialogs_arr = [
//     dialog: {
//         id: Number,
//         name: String,
//         message: String,
//         dialog_arr: string[],
//     }
// ]



const Dialogs = (props) => {



   let dialogsElements = props.dialogs.map((dialog) => {
        let lastMessage = dialog.messages[dialog.messages.length-1]
        return <DialogItem
            key={dialog.id}
            id={dialog.id}
            name={dialog.name}
            message={lastMessage}
        />
   })

    return (
        <div>
            {dialogsElements}
        </div>
    )
}

export default Dialogs