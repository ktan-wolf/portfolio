import React from 'react'
import { FaReact, FaNodeJs, FaGithub, FaGit, FaLinux } from "react-icons/fa";
import { SiRedux, SiRecoil, SiJavascript, SiTypescript, SiNextdotjs, SiTurborepo, SiMongodb, SiPostgresql, SiPrisma, SiExpress, SiGnubash, SiWebrtc } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-2xl text-blue-500" /> },
  { name: "Redux", icon: <SiRedux className="text-2xl text-purple-500" /> },
  { name: "Recoil", icon: <SiRecoil className="text-2xl text-blue-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-2xl text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-2xl text-blue-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-2xl text-gray-800" /> },
  { name: "Turborepo", icon: <SiTurborepo className="text-2xl text-gray-700" /> },
  { name: "Monorepo", icon: <SiTurborepo className="text-2xl text-gray-700" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-2xl text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-2xl text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-2xl text-green-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-2xl text-blue-500" /> },
  { name: "Prisma", icon: <SiPrisma className="text-2xl text-black" /> },
  { name: "GitHub", icon: <FaGithub className="text-2xl text-gray-900" /> },
  { name: "Git", icon: <FaGit className="text-2xl text-orange-600" /> },
  { name: "Bash", icon: <SiGnubash className="text-2xl text-gray-700" /> },
  { name: "WebSockets", icon: <SiWebrtc className="text-2xl text-green-500" /> },
  { name: "Linux", icon: <FaLinux className="text-2xl text-black" /> },
];

const Resume = () => {
  return (
    <div className='p-6 space-y-6 '>
        <p className='text-xl font-bold text-gray-400'>My skills</p>

        <div className="border-4 rounded-2xl w-10 bg-gradient-to-r from-zinc-500 to-black"></div>
 
        <div className="border-2  h-fit w-full flex flex-wrap p-8 gap-4 rounded-2xl">
            {skills.map((skill, index) => (
                <div key={index} className="flex border-2 gap-2 items-center p-4 rounded-lg shadow-md bg-gray-400 text-gray-950 hover:scale-105 transition-transform">
                {skill.icon}
                <p className="text-lg">{skill.name}</p>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Resume