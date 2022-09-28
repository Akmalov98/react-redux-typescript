import React from "react";
import S from './news.module.css'
import {BiNews} from 'react-icons/bi'

const News = () => {
    return (
        <div className={S.news}>
            <div className={S.newsIconDiv}>
                <BiNews className={S.newsIcon}/>
            </div>
            <div className={S.newsDiv}>
                News
            </div>
      </div>
    )
}

export default News