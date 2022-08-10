import React from 'react'
import './navbar.css'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'


const Navbar = () => {

    const {user,logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async ()=>{
        try {
            await logout()
            navigate('/')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="https://www.freeiconspng.com/thumbs/blogger-logo-icon-png/blogger-logo-icon-png-10.png" className="w-14 h-14" alt="" />
                        <span className="ml-3 text-xl">Blog</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/" className="mr-5 hover:text-gray-900 link">Home</Link>
                        <Link to="/write" className="mr-5 hover:text-gray-900 link">Write</Link>
                        <Link to="/settings" className="mr-5 hover:text-gray-900 link">Settings</Link>
                    </nav>
                    {user ?
                    (
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={handleLogout}>Logout
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    ):(
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to="/login">Sign in</Link>
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    )}
                </div>
            </header>
        </>
    )
}

export default Navbar