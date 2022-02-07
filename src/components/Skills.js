import { FaCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="card--skills">
      <h2>Skills</h2>
      <div className="skills--wrapper">
        <div>
          <FaCircle className="circle" /> HTML
        </div>
        <div>
          <FaCircle className="circle" /> JavaScript
        </div>
        <div>
          <FaCircle className="circle" /> GitHub
        </div>
        <div>
          <FaCircle className="circle" /> WordPress
        </div>
        <div>
          <FaCircle className="circle" /> CSS
        </div>
        <div>
          <FaCircle className="circle" /> React
        </div>
        <div>
          <FaCircle className="circle" /> Sass
        </div>
        <div>
          <FaCircle className="circle" /> Figma
        </div>
      </div>
    </div>
  );
};

export default Skills;
