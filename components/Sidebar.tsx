import { GoLocation } from "react-icons/go";
import Image from "next/image";

import { myDetails } from "../data";

import Toggle from "../components/ThemeToggle";

const Sidebar = () => {

  return (
    <>
      <Image
        src="/images/mahim.png"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="155px"
        width="155px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Mahim</span> Safa
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Developer, DevOps <br/>&<br/> Cyber Security Expert
      </p>
      {/* Resume */}
      {/* <a
        href="/assets/Sumit Dey Resume.pdf"
        // pdf files location should be in the same folder as this component
        download="Sumit Dey Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a> */}

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        {myDetails.socials.map((social, index) => (
          <a
            href={social.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-2 py-1 my-2  cursor-pointer dark:bg-dark-200 dark:bg-black-500"
          >
            <social.icon className="w-8 h-8 cursor-pointer" />
            {/* <span>{social.name}</span> */}
          </a>
        ))}
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>{myDetails.address} </span>
        </div>
        <p className="my-2 "> {myDetails.email} </p>
        <p className="my-2"> {myDetails.phone} </p>
      </div>

      {/* Email Button */}

      <div className="flex justify-center my-5 flex-col items-center gap-5">
      <button
        className="w-8/12 px-5 py-2 text-white rounded-full cursor-pointer bg-green hover:scale-105 focus:outline-none"
        onClick={() => location.href = (`mailto:${myDetails.email}`)}
      >
        Email me
      </button>
      <Toggle />
      </div>
    </>
  );
};

export default Sidebar;
