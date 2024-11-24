import React from 'react'
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Projects.css'
import data from '../../utils/slider.json';



const Projects = () => {
  return (
    <div className='mb-44'>
      <section className="wrapper-projects">
        <div className="paddings innerWidth p-container">
            <span className="primaryText p-head" id='MyProjects'>
                My Projects
            </span><br/><br/>
        
        <Swiper breakpoints={{0:{slidesPerView:1, spaceBetween:40},480:{slidesPerView:1, spaceBetween:40},720:{slidesPerView:2, spaceBetween:40},1280:{slidesPerView:3,spaceBetween:50}}}>
          <SlideButtons/>
            {
                data.map((card, i) => (
                  <SwiperSlide key={i}>
                    <div className="flexCenter flexColStart p-card">
                      <img src={card.image} alt="Thumb"/>
                      <span className="p-cardtext"><br/>
                        <span className="primaryText name">{card.name}</span><br/>
                        <span className="secondaryText detail">{card.detail}</span><br/>
                        <a href={card.link1}>
                        <button className="button2">{card['button-name']}</button></a>
                        
                        {card['button-name2'] && (
                        <a href={card.link2}>
                          <button className="button12">{card['button-name2']}</button>
                        </a>
                      )}
                        
                    </span>
 
                    </div>
                  </SwiperSlide>

                ))
            }
        </Swiper>
        </div>
        <div className='role mb-3 text-xl mt-10 text-center font-semibold max-sm:text-base '>Not just a Developer, i can design too!</div>
        <p className='text-black text-center rounded-full border border-zinc-300 max-sm:text-sm cursor-pointer w-fit mx-auto px-4 py-1 bg-white'> <a href="https://www.figma.com/deck/Y6NhRAjAgVSP757S6Ei4A5/Rishabh's-Work?node-id=1-34&t=IomQ7qC2Bed0Kq6Z-1" target='_blank' >View Design Projects</a> </p>
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
