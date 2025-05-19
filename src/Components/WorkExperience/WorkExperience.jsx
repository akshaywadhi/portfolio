import React, { useEffect, useRef } from 'react'
import './WorkExperience.css'
import { WORK_EXPERIENCE } from '../../utils/data'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import Slider from 'react-slick';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function WorkExperience({ section}) {



    useEffect(()=> {
        Aos.init({
            delay: 20,
            duration: 200,
            easing: 'ease-in-out',
          
        });
        Aos.refresh();
    },[])

    const sliderRef = useRef();

    const settings = {
        dots : false,
        infinite: true,
        speed : 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint : 769,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll: 1,
                },
            }
        ]
    };

const slideRight = () => {
    sliderRef.current.slickNext();
};

const slideLeft = () => {
    sliderRef.current.slickPrev();
}

    
 
  return (
<section className='experience-container' ref={section} data-aos='fade-up'>
<h5>Work Experience</h5>
<div className='experience-content'>
    <div className='arrow-right' onClick={slideRight}>
        <span className='material-symbols-outlined'>chevron_right</span>
    </div>
    <div className='arrow-left' onClick={slideLeft}>
        <span className='material-symbols-outlined'>chevron_left</span>
    </div>
    <Slider ref={sliderRef} {...settings}>
    {
        WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item}/>
        ))
    }
    </Slider>
</div>
</section>
  )
}
