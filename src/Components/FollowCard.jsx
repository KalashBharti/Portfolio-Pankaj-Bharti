import React from 'react'
import "../Style/FollowCard.css"
import { Link } from 'react-router-dom';
import profile from "../image/profile.jpg"
export default function FollowCard() {
  return (
    <div className='FollowCard' style={{boxShadow:"1px 1px 5px grey"}}>
      <div className='card-img'>
        <img src={profile} alt="" />
        <label className='card-lable'>Pankaj Bharti</label>
      </div>
      <div className="card-profession">
        Graphic Designer Lorem ipsum dolor sit amet consectetur adipisicing

        <label className='card-location'><i class="ri-map-pin-2-fill red"></i> Delhi, India</label>
      </div>
      <div className="card-buttons">
        <button className='card-messageBtn'>
        <Link className='nav-link ' aria-current="page" to='aboutUs'>
           Message
           </Link>
        </button>

        <div className='d-flex gap-3 '>

        <img  src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
     
        <img  src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/>

        <img  src="https://img.icons8.com/papercut/60/twitter.png" alt="twitter"/>
        </div>
      </div>
    </div>
  )
}
