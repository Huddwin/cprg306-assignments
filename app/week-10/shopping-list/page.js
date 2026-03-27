"use client";

import { useState } from "react";
import { useEffect } from "react";
import { getItems } from "../_services/shopping-list-service";
import { addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "@/app/contexts/AuthContext";
import NewItem from "./newItem";
import ItemList from "./itemList";
import MealIdeas from "./mealIdeas";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  async function loadItems() {
  if (user && user.uid) {
  const itemsList = await getItems(user.uid);
  setItems(itemsList);
    }
  }

  useEffect(() => {
  if (user && user.uid) {
    loadItems();
    }
  }, [user]);

  async function handleAddItem(newItem) {
    if (!user || !user.uid) return;
    const newItemId = await addItem(user.uid, newItem);
    const itemWithId = { ...newItem, id: newItemId };
    setItems((prev) => [...prev, itemWithId]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanedName);
  }

  if (!user) {
    return (
      <main className="bg-gray-900 min-h-screen p-4">
        <p className="text-white">You must be logged in to view this page.</p>
      </main>
    )
  }
  return (
    <main className="bg-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-3 text-blue-800">Shopping List + Meal Ideas</h1>
      <div className="flex gap-4">
        <div className="w-96">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}