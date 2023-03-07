import React from 'react';
import Twitter from '../assets/invert_twitter.png'
import Linkedin from '../assets/invert_linkedin.png'
import Github from '../assets/invert_github.png'
// import HoverableIcon from '../components/IconEffects'

function SocialMediaBar() {
    return (
      <div className="social-media-bar">
        <a href="https://twitter.com/matthewaragaw"><img src={Twitter} alt="Twitter" /></a>

        <a href="https://www.linkedin.com/in/matthew-aragaw/"><img src={Linkedin} alt="Linkedin" /></a>
        <a href="https://github.com/maragaw24"><img src={Github} alt="Github" /></a>
      </div>
    );
  }

export default SocialMediaBar;
