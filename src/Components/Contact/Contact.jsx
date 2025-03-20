import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.png'
import phone_icone from '../../assets/phone_icone.jpg'
import mail_icone from '../../assets/mail_icone.jpg'
import location_icone from '../../assets/location_icone.jpg'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2887a728-9167-49e0-b128-92dae6844af4");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        alert(result);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div onSubmit={onSubmit} className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently avalaible to take on new projects, so fell free to send a message about anything that you want me to work on. You can contact anytime</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icone} alt='mail_icone'/>
                        <p>meradji8abderrahim@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone_icone} alt='phone_icone'/>
                        <p>+1 514-258-2574</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icone} alt='location_icone'/>
                        <p>Montreal, Canada</p>
                    </div>
                </div>
            </div>
            <form  className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" placeholder='Enter your email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact