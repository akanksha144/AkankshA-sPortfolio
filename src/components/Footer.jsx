import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2024 <strong>Akanksha Sahu</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
            <Link key={socialLinks[0].link} to="/contact">
            <img
                src={socialLinks[0].iconUrl}
                alt={socialLinks[0].name}
                className='w-6 h-6 object-contain'
              />
            </Link>
            <Link key={socialLinks[1].link} to="https://github.com/akanksha144" target='_blank'>
            <img
                src={socialLinks[1].iconUrl}
                alt={socialLinks[1].name}
                className='w-6 h-6 object-contain'
              />
              </Link>
              <Link key={socialLinks[2].link} to="https://www.linkedin.com/in/akankshasahu2802/" target='_blank'>
            <img
                src={socialLinks[2].iconUrl}
                alt={socialLinks[2].name}
                className='w-6 h-6 object-contain'
              />
              </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;