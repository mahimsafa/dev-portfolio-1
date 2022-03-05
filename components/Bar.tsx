import { FunctionComponent } from "react";

import { Skill } from "../types";

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <div
        // className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500"
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-gray-900 to-gray-500 dark:from-gray-600 dark:to-gray-700"
        style={{
          width: bar_width,
        }}
      >
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  );
};
export default Bar;
