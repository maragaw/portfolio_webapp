import { createContext, useReducer } from 'react'

export const PostContext = createContext()

export const postsReducer = (state, action) => {
    switch(action.type){
        case 'SET_POST':
            return {posts: action.payload}
        case 'CREATE_POST':
            return {posts: [action.payload, ...state.posts]}
        default:
            return state
    }
}

export const PostContextProvider = ({ children }) => {
    //hook that gets back state value and function to udpate state value, and specifies initial state
    const [state, dispatch] = useReducer(postsReducer, {
        posts: null
    })

    return(
        //needs to wrap root component at ToT, in this case children property is App component
        <PostContext.Provider value={{...state, dispatch}}>
            { children }
        </PostContext.Provider>
    )
}