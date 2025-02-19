import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-400 mb-4">Contact Me</h2>
      
      {/* Contact List */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 mt-10">
        {/* WhatsApp */}
        <a 
          href="https://wa.me/9717944019" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-lg hover:text-green-500 transition"
        >
          <FaWhatsapp className="text-3xl text-green-500" />
          WhatsApp
        </a>

        {/* Instagram */}
        <a 
          href="https://instagram.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-lg hover:text-pink-500 transition"
        >
          <FaInstagram className="text-3xl text-pink-500" />
          Instagram
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/ktan-wolf-7b203b352/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-lg hover:text-blue-600 transition"
        >
          <FaLinkedin className="text-3xl text-blue-600" />
          LinkedIn
        </a>

        {/* Twitter */}
        <a 
          href="https://x.com/ktan_wolf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
        >
          <FaTwitter className="text-3xl text-blue-400" />
          Twitter
        </a>

        {/* Email */}
        <a 
          href="mailto:ktan247610@gmail.com" 
          className="flex items-center gap-3 text-lg  hover:text-red-500 transition"
        >
          <FaEnvelope className="text-3xl text-red-500" />
          Email Me
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/ktan-wolf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 text-lg  hover:text-gray-100 transition"
        >
          <FaGithub className="text-3xl" />
          GitHub
        </a>

      </div>
    </div>
  );
};

export default Contact;
