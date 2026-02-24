"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit (e) {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 9);
    const item = {id, name, quantity, category};
    onAddItem(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 m-2 border rounded">
      <div className="my-2">
        <label htmlFor="name" className="mr-2 p-2 text-blue-800 font-medium">Item Name</label>
        <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="eg. Produce, Dairy..."  className="outline-1 p-2 w-full rounded-md text-blue-800"/>            
      </div>

      <div className="flex gap-2 my-2">
        <div className="w-full">
          <label htmlFor="quantity" className="mr-2 p-2 text-blue-800 font-medium">Quantity</label>
        <input id="quantity" type="number" min="1" max="99" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="outline-1 p-2 w-full rounded-md text-blue-800"/>            
        </div>

        <div className="w-full">
          <label htmlFor="category" className="mr-2 p-2 text-blue-800 font-medium">Category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="outline-1 p-2 w-full bg-white text-blue-800">

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
      </div>

      <button type="submit" className="bg-blue-800 hover:bg-blue-600 active:bg-blue-900 text-white px-4 py-2 block my-2 cursor-pointer w-full">+</button>      
    </form>
  )
}