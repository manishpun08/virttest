"use client";
import React, { useState } from "react";

const SearchFilter = () => {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "Orange", "Grapes"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="p-4 ">
        <h1 className="font-bold text-2xl py-2">
          Task 1: Search Filter Component
        </h1>
        <input
          className="border p-2 rounded mb-4"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="list-disc pl-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <p className="font-bold text-2xl">No data matches</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default SearchFilter;
