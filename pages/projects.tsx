import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { IProject } from "../types";
import { fadeInUp, stagger, routeAnimation } from "../animation";


const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState<number|null>(null);
  
  // extract all strings of arrays of categories from projectData.category and store them in an array
  const categories = projectsData.reduce((acc, project) => {
    project.category.forEach((category) => {
      if (!acc.includes(category)) acc.push(category);
    });
    return acc;
  }
  , ['all'] as string[]);

  const handlerFilterCategory = (category:string | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
      <Head>
        <title>Projects | Mahim Safa</title>
      </Head>
      <div className="px-5 py-2 overflow-y-scroll custom-scrollbar" style={{ height: "65vh" }}>
        <ProjectsNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
          categories={categories}
        />

        <motion.div 
        variants={stagger}
        initial='initial'
        animate='animate'
        className="relative grid grid-cols-12 gap-4 my-3">
          {projects.sort((a:IProject, b:IProject)=> b.id - a.id).map((project, index) => (
            <motion.div 
            variants={fadeInUp} initial='initial' animate='animate'
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" key={index}>
              <ProjectCard project={project} key={project.name} showDetail={showDetail} setShowDetail={setShowDetail} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
