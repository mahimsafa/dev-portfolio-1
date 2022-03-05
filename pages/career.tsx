import { education, experience } from "../data";
import Head from "next/head";

const Career = () => {
  return (
    <>
      <Head>
        <title>Career | Mahim Safa</title>
      </Head>
      <div className="px-6 py-2 overflow-y-scroll custom-scrollbar" style={{ height: '65vh' }}>
        {/* //! Education & Experience */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Experience */}
          <div className="">
            <h5 className="my-3 text-2xl font-bold text-green ">Experience</h5>
            {
              experience.map((item, index) => (
                <div className="my-5" key={index + 'education'}>
                  <h5 className="my-2 text-xl font-bold">{item.position}</h5>
                  <p className="font-semibold">{item.company} <sup className="text-gray-500 dark:text-gray-300">{`${item.start_date} - ${item.end_date}`}</sup></p>
                  <p className="my-3">{item.description}</p>
                  <div className="my-5 flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                    {
                      item.key_techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                        >
                          {tech}
                        </span>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>


          {/* Edication */}
          <div>
            <h5 className="my-3 text-2xl font-bold text-green">Education</h5>
            {
              education.map((item, index) => (
                <div className="my-5" key={index}>
                  <h5 className="my-2 text-xl font-bold">
                    {item.degree}
                    <sup className="text-gray-500 dark:text-gray-300">{`\t${item.passing_year}`}</sup>
                  </h5>
                  <p className="font-semibold">{item.school} </p>
                  <p className="my-3">
                    {item.description}
                  </p>
                </div>
              ))
            }
          </div>


        </div>

      </div>
    </>
  );
};

export default Career;
