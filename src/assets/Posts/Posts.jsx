import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const Posts =useLoaderData()
    return (
      <div>
           <p>Tota post:{Posts.length}</p>
           <div className='px-2 gap-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 '>
            {
             Posts.map(post=><Post post={post}></Post>)
            }
           </div>
    </div>
    );
};

export default Posts;