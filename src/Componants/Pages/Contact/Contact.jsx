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
        <a
          href="https://github.com/MyHobbies0"
          aria-label="github"
          target="_blank"
          rel="noreferrer"
          className="link link--icon"
          id="contact-github"
        >
          <GitHubIcon />
          
        </a>
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
            <div className="hide">almairsh0205@gmil.com</div>
         </div>
        </a>
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
            <div className="hide">+91-7079355936</div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/md-irshad-alam-761b491b9"
          aria-label="github"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
          id="contact-linkedin"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}

export default Contact
