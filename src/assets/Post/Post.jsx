import React from 'react';

const Post = ({post}) => {
    console.log(post);
    const {title,userId,body}=post
    return (
        <div className='text-lg border p-4'>
            <p>Title:{title}</p>
            <p> Id:{userId}</p>
            <p> Body:{body}</p>
        </div>
    );
};

export default Post;