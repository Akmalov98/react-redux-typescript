

  export let state = {
    content : {stories: [
        {id: 0,message: 'Hi how are you',likesCount: 12,dislikesCount: 4},
        {id: 1,message: 'its my first post',likesCount: 11,dislikesCount: 6},
        {id: 2,message: 'its my first post',likesCount: 11,dislikesCount: 6},
        {id: 3,message: 'its my first post',likesCount: 11,dislikesCount: 6}
      ]
    },
    dialogs: [
        {id: 0,name: 'Andrew', messages: ['Hi how are you']},
        {id: 1,name: 'Dima', messages: ['Hi my Name is Dima']},
        {id: 2,name: 'Georgy',messages: ['Hi my Name is Georgy']},
      ]
  }

  export let setStateDialog = (id, newMessage) => {
    state.dialogs[id].messages = [...state.dialogs[id].messages, newMessage]
    console.log('state.dialogs', state.dialogs)
  }

// export let addStory = (storyMessage) => {
//     let newStory = {
//       id: 4,
//       message: storyMessage,
//       likesCount: 0,
//       dislikesCount: 0
//     }
//     state.content.stories.push(newStory)
//   }




