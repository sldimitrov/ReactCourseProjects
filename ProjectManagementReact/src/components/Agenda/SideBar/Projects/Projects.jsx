export default function Projects({ projects, handleSelectProject }) {
  return (
    <>
      {projects.map((project, index) => (
        <button
          key={index}
          onClick={() => {
            handleSelectProject(project[0]);
          }}
          className="text-left w-60 ml-8 pl-1 py-2 font-thin hover:bg-slate-600 rounded-md mr-6"
        >
          {project[0]}
        </button>
      ))}
    </>
  );
}
