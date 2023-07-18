import React from 'react'
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Projects.css'
import data from '../../utils/slider.json'
const Projects = () => {
  return (
    <div>
      <section className="wrapper-projects">
        <div className="paddings innerWidth p-container">
            <span className="primaryText p-head">
                My Projects
            </span>
        </div>
        <Swiper>
            {
                <img src="" alt="" />
            }
        </Swiper>
      </section>
    </div>
  )
}

export default Projects
