import { useState } from "react";
import About from "./About";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import profile from "../assets/duncan vizla.jpg"
import { motion } from "framer-motion"
import Preloader from "./PreLoader";

const Main850 = () => {

  const [ activeSection , setActiveSection ] = useState('about')
  const [showContact, setShowContact] = useState(false);


  return (
    <div className="relative flex flex-col gap-10 bg-[#262626]">
      <div className='bg-black h-52 flex items-center mx-20 pl-20 gap-8 rounded-2xl'>
        <img className="h-4/5 border-2 text-gray-500 rounded-full" src={profile}/>
        <div className="text-gray-500 flex flex-col gap-5">
          <p>Ketan Kumar</p>
          <div className="border-2 text-gray-500 rounded-md p-1">Softwar Developer</div>
        </div>
      </div>

      <nav className="border-2  fixed w-screen backdrop-blur-lg z-10 place-content-center  bottom-0 flex gap-6 p-4 bg-zinc-500 rounded-t-2xl shadow-md">
                        {["about", "skills", "projects", "contact"].map((section) => (
                            <button
                            key={section}
                            onClick={() => setActiveSection(section)}
                            className={`text-lg capitalize text-gray-950 hover:cursor-pointer ${
                                activeSection === section ? "text-gray-900 font-bold" : "text-gray-500"
                            } hover:text-gray-700`}
                            >
                            {section}
                            </button>
                        ))}
                        </nav>

      <div className="bg-black flex items-center mx-20  gap-8 rounded-2xl text-gray-500">
                    


                        {/* Dynamic Content Based on Active Section */}
                        <motion.div 
                            key={activeSection} // Important for animation reset
                            initial={{ opacity: 0, y: 10 }} // Start with 0 opacity and a slight downward position
                            animate={{ opacity: 1, y: 0 }} // Smoothly fade in and move to original position
                            exit={{ opacity: 0, y: -10 }} // Fade out with slight upward motion
                            transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth timing 
                        >
                        {activeSection === "about" && <About />}
                        {activeSection === "skills" && <Resume />}
                        {activeSection === "projects" && <Project />}
                        {activeSection === "contact" && <Contact />}
                        </motion.div>
      </div>        
    </div>
  )
}

export default Main850