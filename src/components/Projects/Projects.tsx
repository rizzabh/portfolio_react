import React from 'react'
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Projects.css'
import data from '../../utils/slider.json';


const Projects = () => {
  return (
    <div>
      <section className="wrapper-projects">
        <div className="paddings innerWidth p-container">
            <span className="primaryText p-head">
                My Projects
            </span><br/><br/>
        
        <Swiper breakpoints={{0:{spaceBetween:40},{480:{slidesPerView:1, spaceBetween:40},720:{slidesPerView:2, spaceBetween:40},1280:{slidesPerView:3,spaceBetween:50}}}>
          <SlideButtons/>
            {
                data.map((card, i) => (
                  <SwiperSlide key={i}>
                    <div className="flexCenter flexColStart p-card">
                      <img src={card.image} alt="Thumb" />
                      <span className="p-cardtext"><br/>
                        <span className="primaryText name">{card.name}</span><br/>
                        <span className="secondaryText detail">{card.detail}</span><br/>
                        <a href={card.link1}>
                        <button className="button2">Code</button></a>
                        
                    </span>
 
                    </div>
                  </SwiperSlide>

                ))
            }
        </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Projects;

const SlideButtons =()=>{
  const swiper = useSwiper();
  return (
    <div className="swipe">
      <button onClick={()=>swiper.slidePrev()}>&lt;</button>
      <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}
