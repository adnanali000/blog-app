import './new.scss'
import { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { fireDb } from '../../firebase'
import { doc, getDoc, collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom'
import FileBase from 'react-file-base64'


const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const [profile, setProfile] = useState();
  const [credentials, setCredentials] = useState({
    image: '',
    title: '',
    category: '',
    description: '',
    isAdmin: true,
    time: new Date()
  })

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(fireDb, "blogs"), { credentials });
      alert("Blog shared successfully")
      navigate('/blogs')

    } catch (error) {
      console.log(error.message)
    }


  }


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">

          <div className="left">
            <img src={credentials && credentials.image ? credentials.image : "https://i.pinimg.com/originals/f9/58/18/f95818f914844d2b1cf7a45b232061d1.jpg"} alt="" />
          </div>

          <div className="right">
            <form>

              <div className="formInput">
                <label>
                  Image:  <FileBase
                    id="file"
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setCredentials({ ...credentials, image: base64 })}
                  />
                </label>

              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} onChange={handleChange} id={input.id} />
                </div>
              ))}

              <button onClick={handleSubmit}>Share</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default New