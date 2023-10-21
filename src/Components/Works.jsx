import React from 'react'
import FollowCard from './FollowCard'
import ListImg from './ListImg'
import "../Style/works.css"
export default function Works() {
  return (
    <div className='work-container'>
       <label className='Skills-label' data-aos="fade" ><span className='red'>M</span>y <span className='red'>W</span>orks</label>
       <div className='work-extra'>

        <FollowCard/>
        <span id='list-img'>

        <ListImg/>
        </span>
       </div>
    </div>
  )
}
