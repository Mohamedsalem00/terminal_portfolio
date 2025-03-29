import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import portfolioData from "../../../portfolioData.json"; // Import the JSON file




const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);
  const projects = portfolioData.projects;

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, githubLink }) => {
        if (id === parseInt(arg[1])) {
          window.open(githubLink, "_blank");
        }
      });
    }
  }, [arg, rerender, currentCommand, projects]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't miss
      </ProjectsIntro>
      {projects.map(({ name, description }, index) => (
        <ProjectContainer key={index}>
          <ProjectTitle>{`${index + 1}. ${name}`}</ProjectTitle>
          <ProjectDesc>{description}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};


export default Projects;
