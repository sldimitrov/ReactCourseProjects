import notesImg from "../../../../assets/no-projects.png";

export default function Empty({ handleAdd }) {
  return (
    <>
      <img
        src={notesImg}
        className="w-20 mx-auto mt-32"
        alt="textnote with a pencil"
      />
      <p className="my-5 text-3xl text-slate-700 font-semibold">
        No Projects Selected
      </p>
      <p className="text-slate-500">
        Select a project or get started with a new one
      </p>
      <button
        className="mt-10 pt-2 pb-2 pl-3 pr-3 font-mono text-white hover:bg-black rounded-md bg-slate-700 hover:text-slate-100"
        onClick={() => {
          handleAdd();
        }}
      >
        Create new project
      </button>
    </>
  );
}
