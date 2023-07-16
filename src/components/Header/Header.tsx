import React from 'react'
import './Header.css'

const Header = () => {
  return (
  <section className='h-wrapper'>
    <div className='flexCenter padding innerWidth h-container'>
    <img src="./rishabhquali.png" alt="Rishabh." width={170}/>
    <div className="flexCenter h-menu">
        <a href="">Home</a>
        <a href="">Projects</a>
        <a href=".././public/Rishabh_Pandey_Resume_FE.pdf" download="Rishabh Resume">Resume</a>
        <button className='button'><a href="">Contact me</a></button>
    </div>

    </div>
    </section>
  )
}

export default Header
