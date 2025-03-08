import React from "react";
import { motion } from "framer-motion";
import {
 SiNodedotjs,
 SiGraphql,
 SiDocker,
 SiAmazonwebservices,
 SiSocketdotio,
 SiOpenai,
 SiGooglecloud,
 SiGooglemaps,
 SiLaravel,
 SiApachekafka,
 SiSymphony,
 SiJenkins
} from "react-icons/si";
import {
 DiReact,
 DiPostgresql,
 DiRedis,
 DiMongodb,
 DiJava,
 DiMysql,
 DiOpenshift
} from "react-icons/di";
import { FaGolang } from "react-icons/fa6"
import { VscAzure } from "react-icons/vsc";
import { FaPhp, FaProjectDiagram } from "react-icons/fa";

const projects = [
 {
  name: "Digital Banking Application (Wealth)",
  description: "A microservice-based platform that enables users to manage and grow their wealth. It offers features such as investment tracking, portfolio management, personalized savings plans, and wealth analysis. The app also includes modules for managing Mutual Funds, Primary Bonds, Secondary Bonds, and Biller E-Tax. With a modular architecture, the app ensures scalability and flexibility, allowing users to monitor their financial progress, receive tailored investment advice, and make informed decisions—all through a secure and intuitive interface.",
  tech: [SiNodedotjs, DiMongodb, SiGraphql, SiApachekafka, DiRedis, DiOpenshift, SiJenkins, SiDocker]
 },
 {
  name: "Legal Knowledge Management System",
  description: "A platform designed to efficiently organize, manage, and access national legal laws, precedents, and related legal content. It enables users to store, update, and search legal information, making it easier to maintain an up-to-date, comprehensive legal repository for reference and decision-making.",
  tech: [DiReact, SiNodedotjs, SiAmazonwebservices, DiPostgresql, SiSocketdotio, DiRedis]
 },
 {
  name: "MyBucket",
  description: "A platform designed for sharing posts, maintaing journals, and organizing group events. It allows users to create and share content through posts, document personal experiences in a journal, and easily plan and coordinate group events with friends. The app focuses on fostering connections and providing a space for both personal reflection and social interaction.",
  tech: [DiReact, SiNodedotjs, SiAmazonwebservices, DiPostgresql, SiSocketdotio, DiRedis]
 },
 {
  name: "SickGPT",
  description: "An AI-powered health consultation app that provides users with personalized health advice, diagnoses, and analysis. Users can interact with virtual doctors, nurses, or health experts to discuss symtomps, advice, and get a better understanding of their health conditions. The app uses advanced AI technology to offer reliable insights and support for informed decision-making ragarding personal health.",
  tech: [DiReact, SiNodedotjs, VscAzure, DiMongodb, SiSocketdotio, SiOpenai, SiGooglecloud]
 },
 {
  name: "Restaurant Delivery App",
  description: "An application that lets users browser restaurant chains, place food orders, and track their delivery in real-time. With an easy-to-use interface, users can explore menu options, create their orders, and get live updates on the status of their delivery, ensuring a seamless and satisfying food ordering experience.",
  tech: [DiReact, FaGolang, SiAmazonwebservices, DiPostgresql, SiSocketdotio, SiGooglemaps]
 },
 {
  name: "Payroll Management System",
  description: "A microservice-based platform designed to automate and streamline payroll processing. It enables business to manage employee salaries, taxes, benefits, and deductions efficiently. With a modular architecture, the system ensures scalability, flexibility, and secure handling of payroll data, providing accurate and timely payroll calculations and reports.",
  tech: [SiLaravel, DiJava, FaGolang, SiAmazonwebservices, DiMysql, SiApachekafka, SiJenkins, SiDocker]
 },
 {
  name: "Financial Management System",
  description: "A microservice-based platform that efficiently tracks accruals and cash advances for businesses, ensuring transparent financial management and compliance. It simplifies expense tracking and provides real-time insights for informed decision-making.",
  tech: [SiLaravel, DiJava, FaGolang, SiAmazonwebservices, DiMysql, SiApachekafka, SiJenkins, SiDocker]
 },
 {
  name: "Toll Road Management System",
  description: "A platform designed to streamline the operation and monitoring of toll roads. It enables efficient toll collection, real-time traffic management, and accurate tracking of vehicles. The system ensures smooth operation by providing status updates for on-site devices and enables users to report accidents or incidents. Gain insights through general reports for smoother operation.",
  tech: [FaPhp, SiSymphony, DiPostgresql, SiSocketdotio, SiGooglemaps]
 },
 {
  name: "Corporate E-Governance Management System",
  description: "A platform designed to streamline and automate the governane processes within a corporation. It enables efficient management of corporate policies, compliance, decision-making, and internal communications. The system ensures transparency, accountability, and effective governance by providing tools for tracking, reporting, and managaing corporate operations and regulatory requirements.",
  tech: [DiJava, DiPostgresql, SiSocketdotio]
 }
];

export default function Projects() {
 return (
  <motion.section
   id="projects"
   className="mb-10"
   initial={{ opacity: 0 }}
   whileInView={{ opacity: 1 }}
   transition={{ duration: 0.5 }}
  >
   <h2 className="text-2xl font-bold flex items-center gap-2">
    <FaProjectDiagram /> Projects
   </h2>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
    {projects.map((project, index) => (
     <motion.div
      key={index}
      className="p-4"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
     >
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p>{project.description}</p>
      <div className="flex gap-2 mt-2 text-3xl">
       {project.tech.map((Tech, i) => (
        <Tech key={i} className="text-gray-700 hover:text-blue-600 transition" />
       ))}
      </div>
     </motion.div>
    ))}
   </div>
  </motion.section>
 );
}
