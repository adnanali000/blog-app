import React from 'react'
import './write.css'

const Write = () => {
  return (
    <div className="write">
    <img
      className="writeImg"
      src="https://images.pexels.com/photos/1102918/pexels-photo-1102918.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt=""
    />
    <form className="writeForm">
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
        </label>
        <input id="fileInput" type="file" style={{ display: "none" }} />
        <input
          className="writeInput"
          placeholder="Title"
          type="text"
          autoFocus={true}
        />
      </div>
      <div className="writeFormGroup">
        <input
          className="writeInput"
          placeholder="Category"
          type="text"
          autoFocus={true}
        />
      </div>
      <div className="writeFormGroup">
        <textarea
          className="writeInput writeText"
          placeholder="Tell your story..."
          type="text"
          autoFocus={true}
        />
      </div>
      <button className="writeSubmit" type="submit">
        Publish
      </button>
    </form>
  </div>
  )
}

export default Write