import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd handle form submission here (e.g. EmailJS, Formspree, custom backend)
    alert("Message feature is simulated. Implement your backend or EmailJS to send emails!");
  };

  return (
    <section id="contact" className="contactSection">
      <h2 className="sectionTitle">Get In Touch</h2>
      <div className="contactContainer">

        {/* Left Side: Contact Form */}
        <div className="contactFormWrapper">
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="inputGroup">
              <input type="text" placeholder="Your Name" required className="contactInput" />
            </div>
            <div className="inputGroup">
              <input type="email" placeholder="Your Email" required className="contactInput" />
            </div>
            <div className="inputGroup">
              <input type="text" placeholder="Subject" required className="contactInput" />
            </div>
            <div className="inputGroup">
              <textarea placeholder="Your Message" rows="5" required className="contactInput contactTextarea"></textarea>
            </div>
            <button type="submit" className="submitBtn">Send Message</button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="contactInfoWrapper">
          <h3 className="contactInfoTitle">Connect With Me</h3>
          <p className="contactInfoDesc">
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>

          <div className="socialLinks">
            <a href="mailto:jkwijerathne7@gmail.com" className="socialItem">
              <div className="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="socialTextContainer">
                <span className="socialTitle">Email</span>
                <span className="socialSubtitle">jkwijerathne7@gmail.com</span>
              </div>
            </a>

            <a href="https://github.com/JKWijerathne" target="_blank" rel="noreferrer" className="socialItem">
              <div className="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="socialTextContainer">
                <span className="socialTitle">GitHub</span>
                <span className="socialSubtitle">JKWijerathne</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/jananiwijerathne2003/" target="_blank" rel="noreferrer" className="socialItem">
              <div className="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="socialTextContainer">
                <span className="socialTitle">LinkedIn</span>
                <span className="socialSubtitle">jananiwijerathne2003</span>
              </div>
            </a>

            <a href="https://medium.com/@jkwijerathne7" target="_blank" rel="noreferrer" className="socialItem">
              <div className="socialIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"></path>
                  <path d="M14.5 12a3.5 4.5 0 1 1 7 0 3.5 4.5 0 0 1-7 0Z"></path>
                  <path d="M22 12a1 4.5 0 1 1 2 0 1 4.5 0 0 1-2 0Z"></path>
                </svg>
              </div>
              <div className="socialTextContainer">
                <span className="socialTitle">Medium</span>
                <span className="socialSubtitle">@jkwijerathne7</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
