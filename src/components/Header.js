import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import profile from "../data/profile.json";

export default function Header() {
 return (
  <motion.header
   id="profile"
   className="flex flex-col sm:flex-row items-center sm:items-start mb-12"
   initial={{ opacity: 0, y: -50 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.5 }}
  >
   {/* Profile Image */}
   <img
    src={profile.image}
    alt="Profile"
    className="w-40 h-40 rounded-lg border-4 border-gray-400 mb-4 sm:mb-0 sm:mr-6 transition-all duration-300 ease-in-out hover:w-60 hover:h-60"
   />

   {/* Profile Text */}
   <div className="text-center sm:text-left">
    <h1 className="text-4xl font-bold">{profile.name}</h1>
    <h2 className="text-xl text-gray-700 italic">{profile.title}</h2>

    {/* Academic Title */}
    {profile.academicTitle && (
     <p className="mt-2 text-sm text-gray-600">{profile.academicTitle}</p>
    )}

    <p className="mt-4 text-sm leading-relaxed">{profile.summary}</p>

    <div className="flex justify-center sm:justify-start gap-4 mt-4 text-2xl">
     <a href="mailto:suhlanijuwan@gmail.com" className="text-gray-700 hover:text-blue-600">
      <FaEnvelope />
     </a>
     <a href="https://github.com/sujwn" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
      <FaGithub />
     </a>
     <a href="https://linkedin.com/in/suju" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
      <FaLinkedin />
     </a>
    </div>
   </div>
  </motion.header>
 );
}
