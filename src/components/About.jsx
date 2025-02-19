import React, { useEffect, useState } from "react";
import web from "../assets/web-dev.svg";
import design from "../assets/design-dev.svg";

const About = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Handle resizing for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1250);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <section className="p-6 space-y-6 h-fit">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-400">About Me</h2>

      <div className="border-4 rounded-2xl w-10 bg-gradient-to-r from-zinc-500 to-black"></div>
      
      {/* Introduction */}
      <p className="text-gray-600 text-lg">
        I'm a Full Stack Web Developer with a passion for crafting robust and efficient backend systems.
         While adept in both front-end and back-end development, my true thrill lies
          in architecting the core functionalities that power a seamless user experience.
      </p>

      <p className="text-gray-600 text-lg">
        A self-proclaimed tech enthusiast, I'm constantly invigorated by the ever-evolving landscape of the industry.
        My curiosity extends to emerging technologies like Blockchain and Machine Learning,
        allowing me to stay informed and integrate these advancements into my solutions when appropriate.
      </p>

      <p className="text-gray-600 text-lg">
        Beyond the back-end, I've also gained valuable experience in UI/UX design.
         My freelance projects have garnered positive feedback, demonstrating my
          ability to bridge the gap between technical expertise and user-centric design principles.
      </p>

      <h1 className="text-3xl font-bold text-gray-400">what i'm doing</h1>
      <section className={`grid  ${isMobile ? "grid-cols-1" : "grid-cols-2"} grid-rows- gap-2`}>
        <div className="h-full w-full border-2 p-6 rounded-2xl">
            <div className="flex gap-4">
                <img className="text-6xl" src={web}/>
                <p className="flex items-center text-gray-400">Web Development</p>
            </div>
            <p className="pl-15">Building the future by developing Web Applications using a blend of front-end and back-end technologies.</p>
        </div>
        <div className="h-full w-full border-2 p-6 rounded-2xl">
            <div className="flex gap-4">
                <img className="text-6xl" src={design}/>
                <p className="flex items-center text-gray-400">UI/UX Design</p>
            </div>
            <p className="pl-15">Designing User Interfaces (UI) and User Experiences (UX) that are both intuitive and aesthetically pleasing.</p>
        </div>
        
      </section>

      {/* Experience */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-400">Experience</h3>
        <p className="text-gray-600 mt-2">
          I have worked on multiple projects, including **e-commerce platforms, portfolio websites, and web applications**.
          My focus is on building **responsive, high-performance, and accessible** applications.
        </p>
      </div>

      
    </section>
  );
};

export default About;
