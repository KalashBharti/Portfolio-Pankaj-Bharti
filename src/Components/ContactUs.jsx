import React from 'react'
import '../Style/ContactUs.css'
import { useState } from 'react'
import Button from '@mui/material/Button';
export default function ContackUs() {
  return (

    <div className='contact-container'>
      <div className='form-background'>
        <label className='component-label'>Conctact Us</label>
        <label className='contact-label-message'>Have a question or just want to say hi? Please don't hesitate we love to hear from you.</label>
      </div>
      <div className="form-container">
        <div className="container text-center">
          <div className="row ">
            <div className="col input-box">
              <label className='form-label'>Name <span className='red'>*</span> </label>
              <div className='form-input'><input type='text' placeholder='Enter Name' ></input></div>
              
            </div>
            <div className="col input-box">
              <label className='form-label'>Email <span className='red'>*</span> </label>
              <div className='form-input'><input type='email' placeholder='Enter Email' ></input></div>
              
            </div>
          </div>
          <div className="row mt-5">
            <div className="col input-box">
              <label className='form-label'>Phone <span className='red'>*</span> </label>
              <div className='form-input'><input type='text' placeholder='Enter contact no.' ></input></div>
              
            </div>
            <div className="col input-box">
              <label className='form-label'>Subject <span className='red'>*</span> </label>
              <div className='form-input'><input type='text' placeholder='Enter contact no.' ></input></div>
              
            </div>
          </div>
          <div className="row mt-5">
            <div className="col input-box">
              <label className='form-label'>Enter Message</label>
              <div className='form-input'><textarea rows={7} type='text' placeholder='Enter Message' ></textarea></div>
              
            </div>
           
          </div>
        <Button className='mt-5' variant="contained">Send Message</Button>
        </div>
      </div>
    </div>

  )
}
