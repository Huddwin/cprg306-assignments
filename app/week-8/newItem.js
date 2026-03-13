"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
  const [item, setItem] = useState({
  name: "",
  quantity: 1,
  category: "produce",
  });

  function handleChange(e) {
    const { name, value, type } = e.target;
    setItem((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  }

  function increment() {
    setItem((prev) => ({
      ...prev,
      quantity: prev.quantity < 20 ? prev.quantity + 1 : prev.quantity,
    }));
  }

  function decrement() {
    setItem((prev) => ({
      ...prev,
      quantity: prev.quantity > 1 ? prev.quantity - 1 : prev.quantity,
    }));
  }
  
  function handleSubmit (e) {
    e.preventDefault();
    const newItem = {...item, id: crypto.randomUUID()};
    onAddItem(newItem);
    setItem({
    name: "",
    quantity: 1,
    category: "produce",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 m-2 border rounded">
      <div className="my-2">
        <label htmlFor="name" className="mr-2 p-2 text-blue-800 font-medium">Item Name</label>
        <input id="name" type="text" required value={item.name} onChange={handleChange} placeholder="e.g. milk, 4 L 🥛"  className="outline-1 p-2 w-full rounded-md text-blue-800"/>            
      </div>

      <div className="my-2">
        <p className="text-blue-800 font-medium">Quantity (1-20)</p>
        <p className="mb-2 text-sm text-gray-600">Current: {item.quantity}</p>
        <div className="flex gap-2">
          <button type="button" onClick={decrement} className="bg-gray-400 hover:bg-gray-500 active:bg-gray-600 text-white px-4 py-2 cursor-pointer rounded">-</button>
          <button type="button" onClick={increment} className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 cursor-pointer rounded">+</button>
        </div>
      </div>

        <div className="w-full">
          <label htmlFor="category" className="mr-2 p-2 text-blue-800 font-medium">Category</label>
          <select id="category" name="category" value={item.category} onChange={handleChange} className="outline-1 p-2.5 w-full rounded-md bg-white text-blue-800">

            <option>Produce</option>
            <option>Dairy</option>
            <option>Bakery</option>
            <option>Meat</option>
            <option>Frozen Foods</option>
            <option>Canned Goods</option>
            <option>Dry Goods</option>
            <option>Beverages</option>
            <option>Snacks</option>
            <option>Household</option>
            <option>Other</option>
          </select>
        </div>

      <button type="submit" className="bg-blue-800 hover:bg-blue-600 active:bg-blue-900 text-white px-4 py-2 block my-2 cursor-pointer">Add Item</button>      
    </form>
  )
}