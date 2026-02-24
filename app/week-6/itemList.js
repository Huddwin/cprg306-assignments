"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex gap-2 my-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 cursor-pointer ${sortBy === "name" ? "bg-blue-800 text-white" : "bg-gray-400 text-white"}`}>Sort by Name</button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 cursor-pointer ${sortBy === "category" ? "bg-blue-800 text-white" : "bg-gray-400 text-white"}`}>Sort by Category</button>
      </div>

      <ul className="p-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}