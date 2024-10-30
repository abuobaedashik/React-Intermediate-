import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {title,userId,body,id}=post
    return (
        <div className='text-lg border p-4 flex flex-col items-center border-yellow-300 rounded-lg'>
            <p className='text-center'>{title}</p>
            <p className=''> Group:{userId}</p>
            <p className='flex-grow text-sm '> No:{id}</p>
            <Link to={`/post/${id}`}>View Deatals</Link>
        </div>
    );
};

export default Post;