import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

export const Footer = () => {
  return (
    <>
      <div className='footermain'> 
        <div className="footerhead">
          <h1>Designed by Anas Mohamad</h1>
        </div>
        <div className="footerlinks">
          <a href="https://github.com/anasmohamad369" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/anas-mohamad369">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>

        </div>
      </div>
    </>
  );
};
