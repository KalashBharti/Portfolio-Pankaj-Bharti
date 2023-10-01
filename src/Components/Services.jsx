import React, { useEffect } from 'react'
import "../Style/Services.css"
import Aos from 'aos'
export default function Services() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='service-container'>
      
        <label className="services-label">Here’s what I can <br/>
  do to help:</label>

  <div className="container text-center mt-3">
  <div className="row" data-aos="flip-up">
    <div className="col service-box" >
      <label className='heading'>Graphic Designer:</label>
      <label className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero, quidem neque odio sed rerum ipsa, mollitia molestiae voluptatum, est itaque alias doloribus magnam consequuntur unde incidunt natus vitae dolorem!</label>
    </div>
    <div className="col service-box">
      <label className='heading'>Graphic Designer:</label>
      <label className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero, quidem neque odio sed rerum ipsa, mollitia molestiae voluptatum, est itaque alias doloribus magnam consequuntur unde incidunt natus vitae dolorem!</label>
    </div>
    <div className="col service-box">
      <label className='heading'>Graphic Designer:</label>
      <label className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero, quidem neque odio sed rerum ipsa, mollitia molestiae voluptatum, est itaque alias doloribus magnam consequuntur unde incidunt natus vitae dolorem!</label>
    </div>
  </div>
  <div className="row" data-aos="flip-up">
    <div className="col service-box">
      <label className='heading'>Graphic Designer:</label>
      <label className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero, quidem neque odio sed rerum ipsa, mollitia molestiae voluptatum, est itaque alias doloribus magnam consequuntur unde incidunt natus vitae dolorem!</label>
    </div>
    <div className="col service-box">
      <label className='heading'>Graphic Designer:</label>
      <label className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero, quidem neque odio sed rerum ipsa, mollitia molestiae voluptatum, est itaque alias doloribus magnam consequuntur unde incidunt natus vitae dolorem!</label>
    </div>
    <div className="col service-box">
      <label className='heading'>Graphic Designer:</label>
      <label className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero, quidem neque odio sed rerum ipsa, mollitia molestiae voluptatum, est itaque alias doloribus magnam consequuntur unde incidunt natus vitae dolorem!</label>
    </div>
  </div>
</div>

      </div>
 
  )
}
