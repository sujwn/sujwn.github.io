import React from "react";
import { motion } from "framer-motion";
import { FaAddressBook } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contacts = [
 { icon: FaEnvelope, link: "mailto:suhlanijuwan@gmail.com", label: "Email" },
 { icon: FaGithub, link: "https://github.com/sujwn", label: "GitHub" },
 { icon: FaLinkedin, link: "https://linkedin.com/in/suju", label: "LinkedIn" },
];

export default function Contact() {
 return (
  <motion.section
   id="contact"
   className="mb-10"
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: 0.5 }}
  >
   <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
    <FaAddressBook /> Contact
   </h2>
   {/* Centering the contact list on small screens and left-aligned on larger screens */}
   <div className="flex justify-center sm:justify-start gap-4 text-2xl">
    {contacts.map(({ icon: Icon, link, label }, index) => (
     <a
      key={index}
      href={link}
      className="text-gray-700 hover:text-blue-600 transition"
      target="_blank"
      rel="noopener noreferrer"
     >
      <Icon />
      <span className="sr-only">{label}</span>
     </a>
    ))}
   </div>
  </motion.section>
 );
}
