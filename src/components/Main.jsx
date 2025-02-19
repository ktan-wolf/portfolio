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

const Main = () => {


    const [ activeSection , setActiveSection ] = useState('about')
    const [loading, setLoading] = useState(true);



  return (
    <>
        {loading ? (
            <Preloader onFinish={() => setLoading(false)} />
        ) : (
            <main className="flex place-content-center items-center w-screen h-screen px-40 gap-8 bg-[#262626] text-gray-500"> 
                    <aside className="border-2 flex flex-col rounded-2xl w-1/4 h-10/12 bg-[#0d0d0d]">
                        <img src={profile} className="w-2/3 m-auto rounded-full border-2" />
                        <p className="text-2xl text-gray-400 m-auto">Ketan Kumar</p>
                        <div className="border-2 w-fit p-1.5 m-auto rounded-xl">Software Developer</div>
                        <div className="border-1 w-5/6 m-auto"></div>
                        <div className="m-auto flex gap-3">
                            <MdOutlineEmail className="text-4xl"/>
                            <div className="flex flex-col justify-center">
                                <a href="mailto:ktan247610@gmail.com" target="_blank" className="text-xs">EMAIL</a>
                                <a href="mailto:ktan247610@gmail.com" target="_blank" className="text-sm">ketan200210@gmail.com</a>
                            </div>
                        </div>
                        <div className="ml-11 flex gap-3">
                            <IoDocumentTextOutline className="text-4xl"/>
                            <div className="flex flex-col justify-center">
                                <a href="mailto:ktan247610@gmail.com" target="_blank" className="text-xs">RESUME</a>
                                <a href="mailto:ktan247610@gmail.com" target="_blank" className="text-sm">Download Resume</a>
                            </div>
                        </div>
                        
                        <div className="flex m-auto gap-5 text-xl">
                            <a href="https://x.com/ktan_wolf" target="_blank"><FaXTwitter/></a>
                            <a href="https://github.com/ktan-wolf" target="_blank"><FaGithub/></a>
                            <a href="https://www.linkedin.com/in/ktan-wolf-7b203b352/" target="_blank"><CiLinkedin/></a>
                        </div>
                    </aside>
                    <aside className="border-2 rounded-2xl w-3/4 h-10/12 relative overflow-y-auto scrollbar-hidden bg-[#0d0d0d]">
                        {/* Navbar Positioned at Top Right */}
                        <nav className="fixed top-15 border-2 right-40 flex gap-6 p-4 bg-zinc-500 rounded-bl-2xl rounded-tr-2xl shadow-md">
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
                    </aside>
            </main>
        )}
    </>
    
  )
}

export default Main