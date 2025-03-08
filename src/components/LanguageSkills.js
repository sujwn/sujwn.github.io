import React from "react";
import { motion } from "framer-motion";
import { FaLanguage } from "react-icons/fa";

const languageSkills = [
 { name: "English", proficiency: "Fluent", flag: "🇺🇸" },
 { name: "Indonesian", proficiency: "Native", flag: "🇮🇩" },
];

export default function LanguageSkills() {
 return (
  <motion.section
   id="language-skills"
   className="mb-10"
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
  >
   <h2 className="text-2xl font-bold flex items-center gap-2"><FaLanguage /> Language Skills</h2>
   <ul className="mt-4">
    {languageSkills.map(({ name, proficiency, flag }, index) => (
     <li key={index} className="text-lg flex items-center gap-2">
      <span>{flag}</span> {name} - {proficiency}
     </li>
    ))}
   </ul>
  </motion.section>
 );
}
