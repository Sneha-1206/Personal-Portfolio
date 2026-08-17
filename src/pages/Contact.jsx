import React from 'react';
import contactImg from '../assets/contact.png';
import emailImg from '../assets/email.png';
import phoneImg from '../assets/phone.png';
import linkedinImg from '../assets/linkedin.png';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main className="fade-in">
      <section className="contact">
        <div className="container">
          <h2 className="contact-heading">Get In Touch</h2>
          
          <div className="contact-wrapper">
            {/* Contact Information Cards */}
            <article className="contact-info">
              <img src={contactImg} alt="Illustration of contact section" />
              <h3>Let's Connect!</h3>
              <p>
                I'm always open to discussing new ideas,
                internships, projects, or collaboration
                opportunities.
              </p>

              <div className="contact-icons">
                <div className="icon-item">
                  <img src={emailImg} alt="Email icon" />
                  <a href="mailto:snehapriyavaleru12@gmail.com">
                    snehapriyavaleru12@gmail.com
                  </a>
                </div>
                
                <div className="icon-item">
                  <img src={phoneImg} alt="Phone icon" />
                  <a href="tel:+91994923XXXX">
                    +91 99492 3XXXX
                  </a>
                </div>
                
                <div className="icon-item">
                  <img src={linkedinImg} alt="LinkedIn icon" />
                  <a 
                    href="http://linkedin.com/in/sneha-priya-valeru-9a6568364/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/sneha-priya-valeru/
                  </a>
                </div>
              </div>
            </article>

            {/* Controlled Contact Form Component */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
