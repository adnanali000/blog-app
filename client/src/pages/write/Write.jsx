import React, { useState, useEffect } from 'react'
import './write.css'
import { UserAuth } from '../../context/AuthContext'
import { fireDb } from '../../firebase'
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'
import FileBase from 'react-file-base64'

const Write = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const [credentials, setCredentials] = useState({
    image: '',
    title: '',
    category: '',
    description: '',
    authorId: user.uid,
    time: new Date()
  })
 

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(fireDb, "blogs"), { credentials });
      navigate('/')

    } catch (error) {
      console.log(error.message)
    }


  }

  return (
    <div className="write">
      <img
        className="writeImg"
        src={credentials.image || "https://images.pexels.com/photos/1102918/pexels-photo-1102918.jpeg?auto=compress&cs=tinysrgb&w=600"}
        alt=""
      />
      <div className="writeForm">
          
          <span className='fileInp' >
          <FileBase
            
            type="file"
            multiple={false}
            onDone={({ base64 }) => setCredentials({ ...credentials, image: base64 })}
          />
          </span>

            <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={handleChange}
            id="title"
          />
        </div>
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Category"
            type="text"
            autoFocus={true}
            onChange={handleChange}
            id="category"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={handleChange}
            id="description"
          />
        </div>
        <button className="writeSubmit" onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </div>
  )
}

export default Write