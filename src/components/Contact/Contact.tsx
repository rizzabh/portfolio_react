import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
export default function Contact() {
    const form = useRef();
    

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_56ecw0e', 'template_qwtt4xt', form.current, 'mZLwBfQRFceD3wXsI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div>
      <section className='wrapper-contact'>
        <div className="paddings innerWidth contacts-cont">
        <span className="primaryText p-head" id='Contact'>
                Contact Me
            </span><br/><br/>
            <div className="contact-cont">
                <img src="./martin-martz-npdGyujDvaU-unsplash 1.png" alt="" />
                <div className="form-layout paddings">
                <span className="primaryText p-head paddings">
                Contact Form
            </span><br/><br/>
            <form ref={form} onSubmit={sendEmail}>
      <label className='Your'>Your Name</label>
      <input type="text" name="user_name" />
      <label className='Your'>Your Email</label>
      <input type="email" name="user_email" />
      <label className='Your'>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
            
                </div>
            </div>
            

        </div>
      </section>
    </div>
  )
}
