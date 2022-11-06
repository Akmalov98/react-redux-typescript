
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { story, getIdCounter } from '../../../store/reducers/postReducer'

import S from './Stories.module.css'
import Story from './story/Story'

const Stories = () => {
    const content: any = useSelector(state => state)
    const dispatch = useDispatch()
    const [textAreaValue, setTextAreaValue] = useState('')
    const addStory = () => {
        console.log('addStory')        
        let newStory = {
            id: getIdCounter(),
            message: textAreaValue,
            likesCount: 0,
            dislikesCount: 0
        }
        console.log('newStory', newStory)
         dispatch({
            type: "ADD_POST",
            payload: newStory
        })
        setTextAreaValue('')
    }

    let storiesElements = content.content.map((story: story) => {
           return <Story   message={story.message}
                        id={story.id}
                        likesCount={story.likesCount}
                        dislikesCount={story.dislikesCount}/>
    })
    
  return (  
    <div className={S.stories}>
    My stories
        <div className={S.storyFormDiv}>
            <div className={S.storyTextareaDiv}>
                <textarea className={S.storyTextarea}
                    placeholder="Anithing new?"
                    value={textAreaValue}
                    onChange={(e) => setTextAreaValue(e.target.value)}
                >
                    
                </textarea>
            </div>
           <div className={S.storyAddButtonDiv}>
                <button className={S.storyAddButton}                     
                    onClick={() => addStory()}
                >
                    Add story
                </button>
            </div>
            <div className={S.storyRemoveButtonDiv}>
                <button className={S.removeButton}
                
                >
                    Remove story
                </button>
            </div>
        </div>
        {storiesElements}
</div>
  )
}

export default Stories
