import React, { useEffect, useRef, useState } from 'react'

import img from '../image/profilePic.png'
import "../Style/HomeWal.css"
import { useTypewriter,Cursor} from 'react-simple-typewriter';

export default function HomeWal() {

    const [text]=useTypewriter({
        words: ['Graphic Designer', 'Information Graphics', 'Art works'],
        loop:{},
        typeSpeed:120,
      
    });
    
  return (
    <div className='walBack'>
      <div className="walLeft">
        <div className="walLeft-label">
            <label id='firstName'>P<span className='red'>A</span>NK<span className='red'>A</span>J</label>
            {/* <br /> */}
            <label id='secondName'>BH<span className='red'>A</span>RTI </label>

            <label id="skills">{text}<Cursor/></label>
           
        </div>
      </div>
      <div className="walRight">
        <img src={img}alt="" />

      </div>
    </div>
  )
}
