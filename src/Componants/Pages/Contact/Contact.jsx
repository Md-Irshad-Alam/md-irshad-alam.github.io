import React from 'react'
import style from './Contact.css'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import DescriptionIcon from "@mui/icons-material/Description";
import PublicIcon from "@mui/icons-material/Public";
function Contact() {
  return (
    <div id='contact'>
       <div className="about__contact center">
        <div className='first-two-part'>
            <a
              href="https://github.com/MyHobbies0"
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              className="link link--icon"
              id="contact-github"
            >
              <div className="hide_parent">
              <GitHubIcon />
                Irshad-alam
              </div>
          
             </a>
        </div>
        <div className='first-two-part'>
        <a
          href="mailto:almairsh0205@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
          className="link link--icon"
          id="contact-email"
          
        >
         <div className="hide_parent">
          <EmailIcon />
            almairsh0205@gmil.com
         </div>
        </a>
        </div>

        <div className='second-two-part'>
          <a
            href="tel:+917079355936"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
            id="contact-phone"
          >
          <div className="hide_parent">
            <PhoneIcon />
            +91-7079355936
            </div>
          </a>
        </div>

        <div className='second-two-part'>
            <a
              href="https://www.linkedin.com/in/md-irshad-alam-761b491b9"
              aria-label="github"
              className="link link--icon"
              target="_blank"
              rel="noreferrer"
              id="contact-linkedin"
            >
            <div className="hide_parent">
            <LinkedInIcon />
              md-irshad-alam
            </div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
