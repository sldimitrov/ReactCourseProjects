import { useState } from "react";
import SideBar from "./SideBar";
import Notepad from "./Notepad";
import Project from "./Project";

export default function Agenda() {
  const [projects, setProjects] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  function handleAdd() {
    setIsAdding(!isAdding);
    setSelectedProject("");
  }

  function handleDelete(project) {
    const delProject = JSON.parse(project); // predefined value

    // Remove items matching the predefined value
    console.log(projects[0]);
    const filteredProjects = projects.filter((item) => item !== delProject);

    setProjects(filteredProjects);

    console.log(filteredArray); // [1, 2, 4, 5, 6, 7]
  }

  function addProject(project) {
    setProjects([...projects, project]);
  }

  function handleSelectProject(tit) {
    const currProject = window.localStorage.getItem(tit); //Get the info about the selected project by its title
    setSelectedProject(currProject); //Set the selected project to the current project
    console.log(selectedProject);
  }

  // Define a variable
  let content;
  // Choose the content based on the state
  if (selectedProject != "") {
    content = (
      <Project selectedProject={selectedProject} onDelete={handleDelete} />
    );
  } else {
    content = (
      <Notepad
        isAdding={isAdding}
        handleAdd={handleAdd}
        addProject={addProject}
      />
    );
  }

  return (
    <div className="my-8 text-center text-2xl">
      <SideBar
        projects={projects}
        handleAdd={handleAdd}
        handleSelectProject={handleSelectProject}
      />
      {content}
    </div>
  );
}
