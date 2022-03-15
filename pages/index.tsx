import {
  NextPage,
} from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { services, myDetails } from "../data";
import { fadeInUp, stagger, routeAnimation } from "../animation";

const About: NextPage = () => {

  return (
    <motion.div variants={routeAnimation} initial='initial' animate='animate' exit='exit'>
      <Head>
        <title>Mahim Safa</title>
      </Head>
      <div className="flex flex-col flex-grow px-6 pt-1 ">
        <h6 className="my-3 text-base font-medium">
          {myDetails.description}
        </h6>
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="my-3 text-xl font-semibold tracking-wide">
            What I am doing
          </h4>

          <motion.div
            variants={stagger}
            initial='initial'
            animate='animate'
            className="grid gap-6 my-3 md:grid-cols-2"
          >
            {/* children's initial and animate property should be same as the parent during a stagger effect  */}
            {services.map((service) => (
              <motion.div
                variants={fadeInUp}
                initial='initial'
                animate='animate'
                className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
                key={service.title}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};


export default About;
