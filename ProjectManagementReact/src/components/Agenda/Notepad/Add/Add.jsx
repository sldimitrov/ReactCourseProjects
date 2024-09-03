import { useState } from "react";
import Input from "./Input";

export default function Add({ handleAdd, addProject }) {
  const [title, setTitle] = useState();
  const [descr, setDescr] = useState();
  const [dueDate, setDueDate] = useState();

  const handleAddProject = (e) => {
    // Prevent the page from reloading
    e.preventDefault();
    //Create a JS object with the project info
    const project = [title, dueDate, descr];
    console.log("project creation:", project);
    addProject(project); // Add the project
    window.localStorage.setItem(title, JSON.stringify(project)); // Add project info into LC
    handleAdd(); // Change the window
  };

  return (
    <div>
      <form onSubmit={handleAddProject}>
        <div className="flex justify-end mr-10 mt-16">
          <button
            onClick={() => {
              handleAdd();
            }}
            className="mr-3 pt-1 pd-2 pl-3 pr-3 m-3 p-1 font-mono rounded-xl hover:bg-red-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="pt-1 pd-2 pl-3 pr-3 m-3 bg-black font-mono text-white p-1 rounded-xl hover:bg-slate-700"
          >
            Save
          </button>
        </div>
        <br />
        <Input name={"title"} value={title} setValue={setTitle} />
        <Input
          name={"description"}
          value={descr}
          textarea
          setValue={setDescr}
        />
        <Input name={"due date"} value={dueDate} setValue={setDueDate} />
      </form>
    </div>
  );
}
