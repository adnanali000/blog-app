import React from 'react'
import SinglePost from '../../components/singlePost/SinglePost'
import Sidebar from '../../components/sidebar/Sidebar'
import './post.css'

const Post = () => {
  return (
    <div className='post'>
        <SinglePost />

        <Sidebar />
    </div>
  )
}

export default Post