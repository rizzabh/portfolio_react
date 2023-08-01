import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const form = useRef();
    
    

  const sendEmail = (e) => {
    e.preventDefault();
    
    const currentForm = form.current;
    // this prevents sending emails if there is no form.
    // in case currentForm cannot possibly ever be null,
    // you could alert the user or throw an Error, here
    if (currentForm == null) return;
    

    emailjs.sendForm('service_56ecw0e', 'template_qwtt4xt',currentForm, 'mZLwBfQRFceD3wXsI')
      .then((result) => {
          alert("Email Sent");
          console.log(result.text)
      }, (error) => {

        alert("Please Fill all of the details");
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
            <div className="contact-cont ">
                <div className="img-green"><img src="./martin-martz-npdGyujDvaU-unsplash 1.png" alt="" /></div>
                <div className="form-layout paddings">
                <span className="primaryText f-head paddings">
                Contact Form
            </span><br/><br/>
            
            <form ref={form} onSubmit={sendEmail} className='paddings' >
      <label className='Your'>Your Name</label>
      <input type="text" name="user_name" />
      <label className='Your'>Your Email</label>
      <input type="email" name="user_email" />
      <label className='Your'>Message</label>
      <textarea name="message" />
      <input className='sub-button' type="submit" value="Send" />
    </form>
   
            
                </div>
            </div>
            

        </div>
      </section>
    </div>
  )
}
