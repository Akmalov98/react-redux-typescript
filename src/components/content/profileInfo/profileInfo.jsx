import React from "react";
import S from './profileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={S.profileInfo}>
            <div className={S.profileAvatar}>
                <img src="https://i02.appmifile.com/images/2017/09/05/33703ac3-e412-4efe-84e0-f11758e94ca6.jpg"
                    className={S.profileAvatarImg}
                />
            </div>
            <div className={S.profileInfoDiv}>
                <div className={S.myNameDiv}>
                    Proger Govnocodov
                </div>
                <div className={S.myQuoteDiv}>
                    qoutes
                </div>
                <div className={S.myTownDiv}>
                    Town
                </div>
                <div className={S.myContacts}>
                    цитата
                </div>
                <div className={S.myLaguage}>
                    language
                </div>
                <div className={S.myAducation}>
                    aducation
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo