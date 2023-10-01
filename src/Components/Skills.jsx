import React from 'react'
import AOS from 'aos'
import { useEffect } from 'react';
import corelDraw from "../image/coreldraw.png"
import "../Style/Skills.css"
import "aos/dist/aos.css"
export default function Skills() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div className='skills-container'>
            <label className='Skills-label' data-aos="fade" ><span className='red'>T</span>ools <span className='red'>E</span>xperience</label>
            
            <div className='skill skill-left ' data-aos="slide-right">
                <div className="skill-img">
                    <img src="https://img.icons8.com/3d-fluency/750/adobe-photoshop.png" alt="adobe-photoshop" />
                </div>
                <div className="skill-description">Photoshop
                <div className='skill-experience'> 25+ years experience</div></div>
            </div>
            <div className='skill skill-right' data-aos="slide-left">
                
                <div className="skill-description">InDesign
                <div className='skill-experience'> 25+ years experience</div>
                </div>
                <div className="skill-img">
                <img src="https://img.icons8.com/3d-fluency/375/adobe-indesign.png" alt="adobe-indesign"  />
            </div>
                </div>
            <div className='skill skill-left' data-aos="slide-right"><div className="skill-img">
                <img src="https://img.icons8.com/3d-fluency/375/adobe-illustrator.png" alt="adobe-photoshop" />
            </div>
                <div className="skill-description">Adobe Illustrator
                <div className='skill-experience'> 15+ years experience</div>
                </div>
                
                </div>
            <div className='skill skill-right' data-aos="slide-left">
            <div className="skill-description">
                CorelDraw 
                <div className='skill-experience'> 10+ years experience</div>
                
                </div>
            <div className="skill-img">
                <img src={corelDraw} alt="adobe-photoshop" />
            </div>
               
            </div>
        </div>
    )
}
