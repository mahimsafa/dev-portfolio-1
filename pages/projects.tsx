import { useState } from "react";
import Head from "next/head";

import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../types";


const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
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
    <>
      <Head>
        <title>Projects | Mahim Safa</title>
      </Head>
      <div className="px-5 py-2 overflow-y-scroll custom-scrollbar" style={{ height: "65vh" }}>
        <ProjectsNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />

        <div className="relative grid grid-cols-12 gap-4 my-3">
          {projects.map((project, index) => (
            <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" key={index}>
              <ProjectCard project={project} key={project.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
