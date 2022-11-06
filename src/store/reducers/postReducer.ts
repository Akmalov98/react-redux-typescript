



export interface story {
    id?: number
    message: string 
    likesCount?: number
    dislikesCount?:number
}

interface storiesState {
    content: story[]

}

interface storyAction {
    type: string
    payload: story
}

let id_counter = 0;

export function getIdCounter():number {
    let result = id_counter;
    id_counter++;
    return result; 
}

export const initialState: storiesState = {
    content: [
        {id: getIdCounter(),message: 'Hi how are you',likesCount: 12,dislikesCount: 4},
        {id: getIdCounter(),message: 'its my first post',likesCount: 11,dislikesCount: 6},
        {id: getIdCounter(),message: 'its my first post',likesCount: 11,dislikesCount: 6},
        {id: getIdCounter(),message: 'its my first post',likesCount: 11,dislikesCount: 6}
    ]
}


export const postReducer = (state = initialState, action: storyAction): storiesState => {
    switch (action.type) {
        case "ADD_POST": 
            return {...state, content: [...state.content, action.payload]}

            
   

        default: 
            return state 

            
            
    }
    
}
