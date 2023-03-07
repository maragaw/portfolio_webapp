import { useState } from 'react'
import { usePostContext } from "../hooks/usePostContext"

const PostForm = () => {
    const { dispatch } = usePostContext()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(null)
    //e is event object
    const handleSubmit = async (e) => {
        e.preventDefault() //default action is to refresh, prevent that default action
        const post = {title, body}
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setBody('')
            setError(null)
            console.log('New Post added', json)
            dispatch({type: 'CREATE_POST', payload: json})
        }
    }

    return(
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a New Post</h3>
            <label>Title:</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}/>

            <label>Body:</label>
            <input
            type="text"
            onChange={(e) => setBody(e.target.value)}
            value={body}/> 
            
            <button>Post</button>
            {error && <div className='error'>{error}</div>}
        </form>

    )
}

export default PostForm