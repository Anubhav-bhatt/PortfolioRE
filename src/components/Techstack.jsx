import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });


const Techstack = () => {
  return (
    <div className="max-w-6xl">
      
  <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-3xl font-bold flex justify-start">Technologies</motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
           <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
  <RiReactjsLine className="text-7xl text-cyan-400" />
</a>
         
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"> <TbBrandNextjs className="text-7xl" /></a>
         
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <a href="https://www.mongodb.com/"target="_blank" rel="noopener noreferrer"><SiMongodb className="text-7xl text-green-500" /></a>
          
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <a href="https://redis.io/"target="_blank" rel="noopener noreferrer"> <DiRedis className="text-7xl text-red-700" /></a>
         
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <a href="https://nodejs.org/en"target="_blank" rel="noopener noreferrer"> <FaNodeJs className="text-7xl text-green-500" /></a>
         
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
            <a href="https://www.postgresql.org/"target="_blank" rel="noopener noreferrer"> <BiLogoPostgresql className="text-7xl text-sky-700" /></a>
         
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Techstack
