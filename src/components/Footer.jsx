
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      
      <div className="flex space-x-6 justify-center py-8 bg-slate-100">
      
        <a
          href="https://www.linkedin.com/in/anubhav-bhatt-a15893204/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-500 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Anubhav-bhatt"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-600 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/anubhav_bhatt__?igsh=MTR5eGt2c3JtZXQxdg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-400 text-2xl"
        >
          <FaInstagram />
        </a>
        
      </div>
      <div className="flex justify-center bg-slate-100 ">
<span className="text-slate-500 ">{currentYear} All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer
