import GroceryItemList from "./GroceryItemList";

export default function Page () {
    return (
        <main className="p-3 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-3">Shopping List</h1>
            <GroceryItemList />
        </main>
    );
}