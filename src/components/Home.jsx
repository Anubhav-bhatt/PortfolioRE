import main from "../assets/photos/main.jpg";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"; 

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center border-b bg-slate-100">
      <div className="py-10">
        <img className="rounded-full w-48 h-48" src={main} alt="img" />
      </div>

      <motion.h1
        variants={container(0)}
        initial="hidden"
        animate="visible"
        className="pb-16 text-3xl font-thin tracking-tight ld:mt-16 lg:text-8xl"
      >
        Anubhav Bhatt
      </motion.h1>

      <h1 className="py-4 text-xl">
        I'm <span className="font-semibold">Full Stack Developer</span>
      </h1>

      <div className="py-6">
        <button className="font-bold px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400">
          Hire Me
        </button>
      </div>

      {/* Social media icons with hover effects */}
      <div className="flex space-x-6 py-6">
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
    </div>
  );
};

export default Home;
