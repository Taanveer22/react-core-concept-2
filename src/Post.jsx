export default function Post({ post }) {
    console.log(post);

    const { title, id, body, userId } = post;
    
    const postStyle = {
        border: '1px solid brown',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }


    return (
        <div style={postStyle}>
            <h5>title:{ title }</h5>
            <p><small>userId: { userId }</small></p>
            <p><small>postId: { id }</small></p>
            <p>body: { body }</p>

        </div>
    )
}