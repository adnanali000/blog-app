import React from 'react'
import './singlePost.css'
import { UserAuth } from '../../context/AuthContext'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { fireDb } from '../../firebase'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SinglePost = ({ blog, id }) => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  const handleDelete = async () => {
    const blogDoc = doc(fireDb, "blogs", id);
    if (window.confirm("Are you sure that you wanted to delete that blog ?")) {
      try {
        await deleteDoc(blogDoc);
        alert("Blog deleted successfully");
        navigate('/')
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div>

      <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src={blog && blog.image || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
            alt=""
          />
          <h1 className="singlePostTitle">
            {blog && blog.title || "Title of blog"}

            {user && blog.authorId == user.uid ?
              (
                <div className="singlePostEdit">
                 <Link to={`/update/${id}`}><i className="singlePostIcon far fa-edit"></i></Link> 
                  <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                </div>
              ) : ''
            }
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                Adnan
              </b>
            </span>
            <span>1 day ago</span>
          </div>
          <p className="singlePostDesc">
            {blog && blog.description}
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default SinglePost