import React from "react";
import S from './stories.module.css'
import Story from "./story/story";
import { ReactDOM } from "react";
import { useEffect } from "react";

const Stories = (props) => {
    const [stories, setStories] = React.useState([...props.stories])
    let newStoryElement = React.createRef()
    
    const addStory = () => {
        let text = newStoryElement.current.value
        let newStory = {
            id: 5,
            message: text,
            likesCount:0,
            dislikesCount: 0
            }
            setStories([...stories, newStory])
            console.log(stories)
    }
    useEffect(() => {
        addStory()
    }, [])



    let storiesElements = stories.map((story) => {
        return  <Story message={story.message}
                       likesCount={story.likesCount}
                       dislikesCount={story.dislikesCount}
    />
    })
    

    // let newStoryElement = React.createRef()
    // const addStory = () => {
    //     let text = newStoryElement.current.value 
    //     props.addStory(text)
    // }

    // addStory = (storyMessage) => {
    //     let newStory = {
    //       id: 4,
    //       message: storyMessage,
    //       likesCount: 0,
    //       dislikesCount: 0
    //     }
    //     props.state.content.stories.push(newStory)
    //   }

    return (
        <div className={S.stories}>
            My stories
                <div className={S.storyFormDiv}>
                    <div className={S.storyTextareaDiv}>
                        <textarea className={S.storyTextarea}
                            ref={newStoryElement}
                            placeholder="Anithing new?"
                        >
                            
                        </textarea>
                    </div>
                   <div className={S.storyAddButtonDiv}>
                        <button className={S.storyAddButton} 
                            onClick={addStory}
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