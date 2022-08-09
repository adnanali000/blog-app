import React from 'react'
import './setting.css'
import Sidebar from '../../components/sidebar/Sidebar'

const Setting = () => {
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
                            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            style={{ display: "none" }}
                            className="settingsPPInput"
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your name" name="name" />
                    <label>Country</label>
                    <input type="text" placeholder="Your country" name="country" />
                    <label>Contact</label>
                    <input type="number" placeholder="Your contact" name="contact" />                   
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Setting