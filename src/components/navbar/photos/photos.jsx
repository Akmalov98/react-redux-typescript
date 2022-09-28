import React from "react";
import S from './photos.module.css'
import {HiOutlinePhotograph} from 'react-icons/hi'

const Photos = () => {
    return (
        <div className={S.photos}>
            <div className={S.photosIconDiv}>
                <HiOutlinePhotograph className={S.photosIcon}/>
            </div>
            <div className={S.photosDiv}>
                     Photos
            </div>
        </div>
    )
}

export default Photos