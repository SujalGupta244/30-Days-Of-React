import React from 'react';
import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
    TiSocialTwitterCircular,
  } from 'react-icons/ti'
  

const Footer = () =>{
    return(
        <div className="footer">
            <h3>30 days of React © 2022</h3>
            <div className="social-media">
                <span className="git"><TiSocialGithubCircular /></span>
                <span className="twitter"><TiSocialTwitterCircular /></span>
                <span className="linkedin"><TiSocialLinkedinCircular /></span>
            </div>
        </div>
    )
}

export default Footer;
