import { useState, useEffect } from "react";

export default function Project({ selectedProject, onDelete }) {
  const [title, setTitle] = useState("Test project");
  const [dueDate, setDueDate] = useState("12/03/24");
  const [description, setDescription] = useState("The best project out here!");
  // Parse the selected project data into a JS object
  const items = JSON.parse(selectedProject);
  // Define the classes for the project details
  const classes = "mt-10 text-stone-700";

  useEffect(() => {
    console.log(Object.values(selectedProject));
    setTitle(selectedProject.tit);
    setDueDate(selectedProject.duD);
    setDescription(selectedProject.des);
  }, [selectedProject]);

  return (
    <>
      <div className="mt-24 font-serif">
        {items.map((m, i) => (
          <h1 className={classes} key={i}>
            {m}
          </h1>
        ))}
        <button
          className="mt-10 bg-red-700 w-28 rounded-lg text-white hover:bg-red-800 hover:text-stone-100"
          onClick={() => {
            onDelete(selectedProject);
          }}
        >
          Delete
        </button>
      </div>
      <div className="border-solid border-2 border-red-300 mt-12"></div>
      <div>
        <h1 className="font-light mt-8 font-serif">TASKS</h1>
      </div>
    </>
  );
}
