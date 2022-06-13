import { FunctionComponent } from "react";

export const NavItem: FunctionComponent<{
  value: string | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  categories: string[];
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      {
        props.categories.map((value,index) => (
          <NavItem
            value={value}
            handlerFilterCategory={props.handlerFilterCategory}
            active={props.active}
            // {...props}
            key={index}
          />
        ))
      }
      {/* <NavItem value="all" {...props} />
      <NavItem value="cybersecurity" {...props} /> */}
    </div>
  );
};

export default ProjectsNavbar;
