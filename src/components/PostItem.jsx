const PostItem=({post})=>(
    <div className="post">
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
);


export default PostItem;