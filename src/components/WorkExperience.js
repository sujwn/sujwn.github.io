import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

import workExperience from "../data/workExperience.json";

export default function WorkExperience() {
 const renderDescription = (description) => {
  // Split description by newline character \n
  const lines = description.split("\n");

  // Check if any line starts with '-'
  const hasBulletPoints = lines.some(line => line.startsWith("-"));

  if (hasBulletPoints) {
   // If there's a bullet list, map lines that start with '-' to <li> elements
   return (
    <ul className="list-disc pl-5">
     {lines.map((line, index) => {
      // If the line starts with '-', create a list item
      if (line.startsWith("-")) {
       return <li key={index}>{line.slice(1).trim()}</li>;
      }
      // Otherwise, render as a paragraph
      return <p key={index}>{line}</p>;
     })}
    </ul>
   );
  } else {
   // If there's no bullet list, return the description as normal text with newlines handled
   return <p className="whitespace-pre-line">{description}</p>;
  }
 };

 return (
  <motion.section
   id="work-experience"
   className="mb-10"
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: 0.5 }}
  >
   <h2 className="text-2xl font-bold flex items-center gap-2">
    <FaBriefcase /> Work Experiences
   </h2>
   <div className="grid grid-cols-1 gap-6 mt-4">
    {workExperience.map((job, index) => (
     <motion.div key={index} className="mt-4" whileHover={{ scale: 1.02 }}>
      <h3 className="text-xl font-semibold">
       {job.title} - {job.company}
      </h3>
      <p className="text-lg">{job.duration}</p>
      {/* Render the description with the function */}
      {renderDescription(job.description)}
     </motion.div>
    ))}
   </div>
  </motion.section>
 );
}
