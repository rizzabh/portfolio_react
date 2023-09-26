import React from 'react'
import './Header.css'

const Header = () => {
  const setDarkmode = ()=>{
    document.querySelector("body")?.setAttribute('data-theme', 'dark');
  }
  const setLightmode = ()=>{
    document.querySelector("body")?.setAttribute('data-theme', 'light')
  }
  const toggleTheme = (e) => {
    if(e.target.checked) setDarkmode();
    else setLightmode();

  }
  
  
  return (
  <section className='h-wrapper'>
    <div className='flexCenter padding innerWidth h-container'>
    <div className="logo hero-title"><a href='/'>R.</a></div>
    <div className="flexCenter h-menu">
        <a href="" className='Navv' >Home</a>
        <a href="#MyProjects" className='Navv'>Projects</a>
        <a href="https://drive.google.com/file/d/1ZE0uFdpDIj-E8wJFjxSFgOj2Nn6TaTut/view?usp=sharing" download="Rishabh Resume" className='Navv'>Resume</a>
        <div><input className='change-theme' id='dark-model' type='checkbox' onChange={toggleTheme}/> <label htmlFor="dark-model"><img src="icons8-dark-theme-30.png" id='abc' alt="Themes"/></label> </div>
        <button className='button2 Navv' ><a href="#Contact">Contact me</a></button>
        <div className="ham">
        <svg className='ham-icon' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
        </div>
    </div>

    </div>
    </section>
    
  )
}

export default Header
