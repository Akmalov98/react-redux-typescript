import React from "react";
import S from './searchInput.module.css'
import {MdSearch} from 'react-icons/md'
const SearchInput = () => {
    return (
        <div className={S.search}>
            <div className={S.searchIconDiv}>
                <MdSearch class={S.searchIcon}/>
            </div>
            <div className={S.searchInputDiv}>
                <input className={S.input} placeholder="Search"/>
            </div>
        </div>
    )
}

export default SearchInput