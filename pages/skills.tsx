import Bar from "../components/Bar";
import { frameworks, tools } from "../data";

import Head from "next/head";

const Skills = () => {
  return (
    <>
    <Head>
        <title>Skills | Mahim Safa</title>
      </Head>
    <div className="px-6 py-2">

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {frameworks.map((framework, i) => (
              <Bar value={framework} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
