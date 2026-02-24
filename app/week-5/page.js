import NewItem from "./newItem";

export default function Page() {
  return (
    <main className="p-3 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-3 text-blue-800">Add Item</h1>
      <NewItem />
    </main>
  );
}