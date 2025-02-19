import React, { useEffect, useState } from 'react'
import { FaEye, FaGithub } from 'react-icons/fa';
import project from "../assets/project.png"

const projects = [
  {
    title: "Project 1",
    image: project,
    liveDemo: "#",
    github: "#"
  },
  {
    title: "Project 2",
    image: project,
    liveDemo: "#",
    github: "#"
  },
  {
    title: "Project 3",
    image: project,
    liveDemo: "#",
    github: "#"
  }
];

const Project = () => {


  const [isMobile, setIsMobile] = useState(window.innerWidth < 1250);

  // Handle resizing for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1250);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className='p-6 space-y-6 '>
         <p className='text-xl font-bold text-gray-400'>Projects</p>

         <div className="border-4 rounded-2xl w-10 bg-gradient-to-r from-zinc-500 to-black"></div>

         {/* Projects Section */}
        <section className="mb-6">
            <div className={`grid  ${isMobile ? "grid-cols-2" : "grid-cols-3"} gap-6`}>
            {projects.map((project, index) => (
                <div key={index} className="relative group overflow-hidden border rounded-lg shadow-lg">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 backdrop-blur-md bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-white text-xl bg-blue-500 p-2 rounded-full hover:bg-blue-700">
                      <FaEye />
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white text-xl bg-gray-800 p-2 rounded-full hover:bg-gray-900">
                      <FaGithub />
                      </a>
                  </div>
                  <div className='flex justify-center gap-8 pb-2 pt-2 bg-zinc-500'>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-white text-xl bg-blue-500 p-2 rounded-full hover:bg-blue-700">
                      <FaEye />
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white text-xl bg-gray-800 p-2 rounded-full hover:bg-gray-900">
                      <FaGithub />
                    </a>
                  </div>
                </div>
            ))}
            </div>
        </section>
    </div>

    
  )
}

export default Project