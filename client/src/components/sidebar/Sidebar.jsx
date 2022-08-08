import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img
        src="https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <p>
      Blog posts include beauty product recommendations, travel and vacation trip reviews, and personal blog posts.
      </p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">
            Life
        </li>
        <li className="sidebarListItem">
            Music
        </li>
        <li className="sidebarListItem">
            Sport
        </li>
        <li className="sidebarListItem">
            Style
        </li>
        <li className="sidebarListItem">
            Tech
        </li>
        <li className="sidebarListItem">
            Cinema
        </li>
      </ul>
    </div>
    {/* <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
    </div> */}
  </div>
  )
}

export default Sidebar