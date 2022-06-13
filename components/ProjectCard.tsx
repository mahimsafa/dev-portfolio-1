import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import { fadeInUp, fadeOut } from "../animation";

import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard: FunctionComponent<{
  project: IProject;
  showDetail: number | null;
  setShowDetail: (id: number | null) => void;
}> = ({
  project: {
    id,
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
  showDetail,
  setShowDetail,
}) => {
    const [variant, setVariant] = useState(fadeInUp);



    return (
      <div>
        < Image
          src={image_path}
          alt={name}
          className="cursor-pointer"
          onClick={() => setShowDetail(id)}
          layout="responsive"
          height="150"
          width="300"
        />
        <p className="my-2 text-center" > {name}</p >

        {showDetail === id && (
          <motion.div
            variants={variant} initial='initial' animate='animate'
            className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 md:p-10 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
            <div>
              <Image
                src={image_path}
                alt={name}
                priority={true}
                // placeholder='blur'
                layout="responsive"
                height="150"
                width="300"
              />
              <motion.div
                variants={fadeInUp} initial='initial' animate='animate'
                className="flex justify-center my-4 space-x-3">
                <a
                  href={github_url}
                  target="_blank"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillGithub /> <span>Github</span>
                </a>
                {
                  deployed_url && (
                    <a
                      href={deployed_url}
                      target="_blank"
                      className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                    >
                      <AiFillProject /> <span>Project</span>
                    </a>
                  )
                }

              </motion.div>
            </div>

            <motion.div variants={fadeInUp} initial='initial' animate='animate'>
              <motion.h2
                variants={fadeInUp} initial='initial' animate='animate'
                className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
              <motion.h3
                variants={fadeInUp} initial='initial' animate='animate'
                className="mb-3 font-medium">{description}</motion.h3>

              <motion.div
                variants={fadeInUp} initial='initial' animate='animate'
                className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                {key_techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              initial='initial'
              animate='animate'
              onClick={() => {
                setVariant(fadeOut);
                setTimeout(() => {
                  setShowDetail(null);
                  setVariant(fadeInUp);
                }, 1000);
              }}
              className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            >
              <MdClose size={30} />
            </motion.button>
          </motion.div>
        )}
      </div>
    );
  };


export default ProjectCard;
