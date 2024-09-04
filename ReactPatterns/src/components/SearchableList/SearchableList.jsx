import { useState } from "react";

export default function SearchableList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResult = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResult.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}