export default function Input({ name, value, setValue, textarea }) {
  let classes = "bg-slate-200 pl-3 w-80 text-wrap";

  return (
    <>
      <label
        className="text-slate-600 text-sm font-semibold uppercase p-1"
        htmlFor="title"
      >
        {name}
      </label>
      <br />
      {textarea ? (
        <textarea
          className={classes}
          type="text"
          required
          id="title"
          value={value}
          name="title"
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input
          className={classes}
          type="text"
          required
          id="title"
          value={value}
          name="title"
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <br />
    </>
  );
}
