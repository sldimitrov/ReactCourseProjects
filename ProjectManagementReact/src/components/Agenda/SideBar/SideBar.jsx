import Projects from "./Projects";

export default function SideBar({ projects, handleAdd, handleSelectProject }) {
  return (
    <div className="bg-black text-white flex absolute inset-0 w-80 flex-col pl-3 pr-3 pt-2 pb-2 rounded-md">
      <h1 className="text-left ml-8 mt-20">MY PROJECTS</h1>
      <br />

      <button
        onClick={() => {
          handleAdd();
        }}
        className="bg-slate-900 rounded-md ml-8 w-52 pt-2 pb-2 pl-3 pr-3 hover:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-plus flex absolute"
          viewBox="0 0 16 16"
        >
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
        <p className="pl-8 font-serif pt-1">Add Project</p>
      </button>

      <br />
      <h2>
        {projects ? (
          <Projects
            projects={projects}
            handleSelectProject={handleSelectProject}
          />
        ) : (
          "Empty"
        )}
      </h2>
    </div>
  );
}
