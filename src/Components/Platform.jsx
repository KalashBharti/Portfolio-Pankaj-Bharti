import React from 'react'
// import windowsImg from '../image/Windows.png'
import imacImg from '../image/IMac_svg.svg'
import "../Style/Platform.css"

export default function Platform() {
  return (
    <div className='tools-container'>
       <label className='Platform-label Skills-label' data-aos="fade" ><span className='red'>P</span>latform <span className='red'>E</span>xperience</label>

       <div className="platforms">
        <div className="platforms-imac">
            <img className='platform-i-img'  src={imacImg} alt="" />
        </div>
        <div className="platforms-windows">
        {/* <img className='platform-w-img'  src={windowsImg} alt="" /> */}
        </div>
       </div>
    </div>
  )
}
