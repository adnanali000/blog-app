import React, { useState, useEffect } from 'react'
import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'
import FileBase from 'react-file-base64'
import { toast, ToastContainer } from 'react-toastify';
import { fireDb } from '../../firebase'
import { doc, setDoc, getDoc,updateDoc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';


const initialState = {
    username: "",
    country: "",
    image: "",
    contact: "",
    time: new Date(),
  }
const Setting = () => {
    const { user } = UserAuth();
    const [profile, setProfile] = useState({})
    const [credentials, setCredentials] = useState(initialState)
    const navigate = useNavigate();

    const { username, country, image, contact, time } = credentials;

    useEffect(() => {
        const getData = async () => {
          const userData = await getDoc(doc(fireDb, "users",user.uid )).then(docSnap => {
            if (docSnap.exists()) {
              setCredentials(docSnap.data().credentials);
            } else {
              console.log("no data found");
            }
          })
        }
        getData();
      }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await setDoc(doc(fireDb, "users", user.uid), { credentials });
            alert("Profile updated successfully")
            navigate('/')


        }
        catch (err) {
            console.log(err)
        }
        // try {
        //     const singleBlog = doc(fireDb, "users", user.uid);
        //     await updateDoc(singleBlog, {
        //       credentials: {username: credentials.username, country: credentials.country,userId: user.uid ,contact:credentials.contact,image:credentials.image,time: new Date()}
        //     });
        //     alert("Profile updated successfully")
        //     navigate('/')
        //   }
          // catch (err) {
          //   console.log(err);
          // }
    }

    return (
            <div className='setting'>
                <div className="settingWrapper">
                    <div className="settingsTitle">
                        <span className="settingsTitleUpdate">Update Your Account</span>
                    </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img
                                src={credentials.image || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg"}
                                alt=""
                            />

                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setCredentials({ ...credentials, image: base64 })}
                            />

                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="Enter your name" value={username || credentials.username} onChange={handleChange} name="username" />
                        <label>Country</label>
                        <input type="text" placeholder="Your country" value={country || credentials.country } onChange={handleChange} name="country" />
                        <label>Contact</label>
                        <input type="number" placeholder="Your contact" value={contact || credentials.contact} onChange={handleChange} name="contact" />
                        <button className="settingsSubmitButton" onClick={handleSubmit}>
                            Update
                        </button>
                    </form>
                </div>
                <Sidebar />
            </div>
    )
}

export default Setting