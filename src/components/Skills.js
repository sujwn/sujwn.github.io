import React from "react";
import { motion } from "framer-motion";
import {
 SiNodedotjs,
 SiGraphql,
 SiPostgresql,
 SiDocker,
 SiKubernetes,
 SiGo,
 SiMongodb,
 SiAmazonwebservices,
 SiLaravel,
 SiJenkins,
 SiSocketdotio,
 SiApachekafka,
 SiReact
} from "react-icons/si";
import { FaCogs, FaCode, FaGitAlt } from "react-icons/fa";
import { DiMysql, DiOpenshift, DiRedis } from "react-icons/di";

const skills = [
 SiNodedotjs,
 SiGo,
 SiLaravel,
 SiReact,
 FaGitAlt,
 FaCogs,
 SiMongodb,
 SiPostgresql,
 DiMysql,
 DiRedis,
 SiApachekafka,
 SiGraphql,
 SiSocketdotio,
 DiOpenshift,
 SiAmazonwebservices,
 SiDocker,
 SiJenkins,
 SiKubernetes
];

export default function Skills() {
 return (
  <motion.section
   id="skills"
   className="mb-10"
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: 0.5 }}
  >
   <h2 className="text-2xl font-bold flex items-center gap-2">
    <FaCode /> Skills
   </h2>
   <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-4">
    {skills.map((Icon, index) => (
     <motion.div
      key={index}
      className="flex justify-center items-center text-4xl sm:text-5xl md:text-6xl text-gray-700 transition hover:text-blue-600"
      whileHover={{ scale: 1.3, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
     >
      <Icon />
     </motion.div>
    ))}
   </div>
  </motion.section>
 );
}
