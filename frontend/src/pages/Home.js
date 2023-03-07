//Blog Page
import { useEffect } from "react"
import { usePostContext } from "../hooks/usePostContext"

//components
import PostDetails from '../components/PostDetails'
import PostForm from '../components/PostForm'
const Home = () => {
    //using global context instead of local state
    const {posts, dispatch} = usePostContext()

    //useEffect hook fires function when the component is rendered, only fires once
    useEffect(() =>{
        const fetchPosts = async () => {
            const response = await fetch('/api/posts')
            const json = await response.json()
            if(response.ok){
                //fires postReducer function and takes in action
                dispatch({type:'SET_POST', payload:json})

            }
        }
        fetchPosts()     
    }, [dispatch])
    return (
        <div className="home">
            <div className="posts">
                {posts && posts.map((post) => (
                    <PostDetails key={post._id} post={post} />
                ))}
            </div>
            <PostForm />
        </div>
    )
}

export default Home