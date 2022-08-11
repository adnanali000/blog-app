import { useState,useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Table from '../../components/table/Table'
import './home.scss'
import { collection, getDocs } from 'firebase/firestore';
import {fireDb} from '../../firebase'


const Home = () => {
  const [data, setData] = useState([]);
  const [blogs,setBlogs] = useState(0);


const blogsCollectionRef = collection(fireDb, "blogs");

const usersCollectionRef = collection(fireDb, "users");


useEffect(() => {
  const getData = async () => {
    const userData = await getDocs(usersCollectionRef);
    setData(userData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  getData();
}, [])

useEffect(() => {
  const getBlogs = async () => {
    const blogData = await getDocs(blogsCollectionRef);
    setBlogs(blogData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  getBlogs();
}, [])

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        <div className="widgets">
          <Widget type ="user" users={data} />
          <Widget type ="blogs" blogs={blogs}/>
          
        </div>
        <div className="listContainer">
          <div className="listTitle">All Users</div>
          <Table data={data} /> 
        </div>
      </div>
    </div>
  )
}

export default Home