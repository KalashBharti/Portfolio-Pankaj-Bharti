import React, { useCallback, useState } from 'react'
import "../Style/Navbar.css"
export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = useCallback(() => {
        setShowMenu((e) => !e);
    }, [setShowMenu])
    return (

        <div>
            <nav className={showMenu?"navbar navbar-back-blur":'navbar'}>
                <div className='hamburger'>
                    <i  className="ri-menu-line " onClick={toggleMenu} ></i></div>
                <div className={showMenu ? 'nav-right' : 'nav-right menu-hide'}>
                    <div className='icon-list '>
                        <div className="icon"><i className="ri-home-fill"></i>
                            <label>home</label></div>
                        <div className="icon"><i className="ri-chat-smile-2-fill"></i>
                            <label>about us</label></div>
                        <div className="icon"><i className="ri-service-fill"></i>
                            <label>service</label></div>
                        <div className="icon"><i className="ri-mail-fill"></i>
                            <label>contact us</label></div>



                    </div>
                </div>
            </nav>
        </div>
    )
}
