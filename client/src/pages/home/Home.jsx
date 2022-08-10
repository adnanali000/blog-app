import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import { collection, getDocs } from "firebase/firestore";
import { fireDb } from '../../firebase'

const Home = () => {
  const [data, setData] = useState([])

  const blogsCollectionRef = collection(fireDb, "blogs");
  
  useEffect(() => {
   
    const getData = async () => {
      const placeData = await getDocs(blogsCollectionRef);
      setData(placeData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getData();

  }, [])


  return (
    <>
      <Header />
      <div className='home'>
        <Posts data={data} />
        <Sidebar />
      </div>
    </>
  )
}

export default Home