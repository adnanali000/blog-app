import { useState,useEffect } from 'react'
import './viewblog.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
import {fireDb} from '../../firebase'
import { useParams,Link } from 'react-router-dom';

import {collection,getDoc,doc} from 'firebase/firestore';

const ViewBlog = () => {
  const [blog,setBlog] = useState({});
  const {id} = useParams();
  
  useEffect(()=>{
    const getData = async () =>{
      const blogData = await getDoc(doc(fireDb, "blogs", id)).then(docSnap => {
          if (docSnap.exists()) {
            setBlog(docSnap.data().credentials);
          } else {
            console.log("no data found");
          }
        })     
  }
 getData();
  },[id])


  return (
    <div className="list">
       <Sidebar />
       <div className="listContainer">
         <Navbar />

         <div className="singlePost">
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src={blog.image || "https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}
            alt=""
          />
          <h1 className="singlePostTitle">
            {blog && blog.title || "Title of blog"}
          </h1>
          <div className="singlePostInfo">
            <span>
              Category:
              <b className="singlePostAuthor">
                {blog && blog.category}
              </b>
            </span>
          </div>
          <p className="singlePostDesc">
            {blog && blog.description}
          </p>

          <div className="backbtn">
            <Link to="/blogs">
            <button className='goBack'>Go Back</button>
            </Link>
          </div>
        </div>
      </div>

       </div>
    </div>
  )
}

export default ViewBlog