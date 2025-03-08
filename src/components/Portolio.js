import React from "react";
import Header from "./Header";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import LanguageSkills from "./LanguageSkills";
import Contact from "./Contact";

export default function Portfolio() {
 return (
  <div className="font-serif bg-gray-100 text-gray-900 max-w-4xl mx-auto p-12 shadow-lg rounded-lg">
   <Header />
   <WorkExperience />
   <Projects />
   <Skills />
   <LanguageSkills />
   <Contact />
  </div>
 );
}
