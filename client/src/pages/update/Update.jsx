import React, { useState, useEffect } from 'react'
import './update.css'
import { UserAuth } from '../../context/AuthContext'
import { fireDb } from '../../firebase'
import { doc, getDoc, collection, addDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from 'react-router-dom'
import FileBase from 'react-file-base64'

const initialState = {
  title: "",
  category: "",
  image: "",
  description: "",
  time: new Date(),
}
const Update = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const { id } = useParams();

  const [credentials, setCredentials] = useState(initialState)

  const { title, category, image, description, time } = credentials;

  useEffect(() => {
    const getData = async () => {
      const blogData = await getDoc(doc(fireDb, "blogs", id)).then(docSnap => {
        if (docSnap.exists()) {
          setCredentials(docSnap.data().credentials);
        } else {
          console.log("no data found");
        }
      })
    }
    getData();
  }, [id])


  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials({ ...credentials, [id]: value });
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const singleBlog = doc(fireDb, "blogs", id);
      // To update age and favorite color:
      await updateDoc(singleBlog, {
        credentials: {title: credentials.title, category: credentials.category,authorId: user.uid ,description:credentials.description,image:credentials.image,time: new Date()}
      });
      alert("Blog updated successfully")
      navigate('/')
    }
    catch (err) {
      console.log(err);
    }

  }

  return (
    <div className="write">
      <img
        className="writeImg"
        src={credentials.image}
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
            value={title || credentials.title}
            onChange={handleChange}
            id="title"
          />
        </div>
        <div className="writeFormGroup">
          <input
            className="writeInput"
            placeholder="Category"
            type="text"
            value={category || credentials.category}
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
            value={description || credentials.description}
            autoFocus={true}
            onChange={handleChange}
            id="description"
          />
        </div>
        <button className="writeSubmit" onClick={handleUpdate}>
          Publish
        </button>
      </div>
    </div>
  )
}

export default Update