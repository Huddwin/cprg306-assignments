"use client";

import { useState } from "react";
import NewItem from "./newItem";
import ItemList from "./itemList";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="bg-gray-900 p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-3 text-blue-800">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}