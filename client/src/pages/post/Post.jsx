import React,{useState,useEffect} from 'react'
import SinglePost from '../../components/singlePost/SinglePost'
import Sidebar from '../../components/sidebar/Sidebar'
import './post.css'
import {fireDb} from '../../firebase'
import { useParams } from 'react-router-dom';
import {collection,getDoc,doc} from 'firebase/firestore';

const Post = () => {
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
    <div className='post'>
        <SinglePost blog={blog} id={id} />

        {/* <Sidebar /> */}
    </div>
  )
}

export default Post