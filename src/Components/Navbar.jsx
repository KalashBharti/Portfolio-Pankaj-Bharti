import React, { useCallback, useState } from 'react'
import "../Style/Navbar.css"
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = useCallback(() => {
        setShowMenu((e) => !e);
        
    }, [setShowMenu])
    return (

        <div>
            <nav className={showMenu?"navbar-container navbar-back-blur":'navbar-container'}>
                <div className='hamburger'>
                    <i  className="ri-menu-line " onClick={toggleMenu} ></i></div>
                <div className={showMenu ? 'nav-right' : 'nav-right menu-hide'}>
                    <div className='icon-list '>
                    <Link className='nav-link ' aria-current="page" to='/'>
                        <div className="icon-box">
                            <i className="ri-home-fill"></i>
                            <label>home</label>
                            </div>
                            </Link>
                        <div className="icon-box"><i className="ri-chat-smile-2-fill"></i>
                            <label>about us</label></div>
                        <div className="icon-box"><i className="ri-service-fill"></i>
                            <label>service</label></div>
                            <Link className='nav-link ' aria-current="page" to='/contactUs'>
                        <div className="icon-box">
                            <i className="ri-mail-fill"></i>
                            <label>contact us</label>
                            </div>
                            </Link>



                    </div>
                </div>
            </nav>
        </div>
    )
}
