const PostDetails = ({ post }) => {
    return(
        <div className="post-details">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <p>{post.createdAt}</p>
        </div>
    )
}

export default PostDetails