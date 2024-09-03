import Add from "./Add";
import Empty from "./Empty";

export default function Notepad({ isAdding, handleAdd, addProject }) {
  return (
    <>
      {isAdding ? (
        <Add handleAdd={handleAdd} addProject={addProject} />
      ) : (
        <Empty handleAdd={handleAdd} />
      )}
    </>
  );
}
