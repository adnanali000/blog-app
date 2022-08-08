import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import {DarkModeContext} from '../../context/darkModeContext'

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext)
  
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Adnan-Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: 'none' }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <CreateIcon className="icon" />
              <span>Blogs</span>
            </li>
          </Link>
          
          <p className="title">Admin</p>
        
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar