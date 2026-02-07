import Item from "./item";
import items from "./items.json";

export default function ItemList () {
    return (
        <ul className="p-4">
            {items.map((item) => (
                <Item
                key = {item.id}
                name = {item.name}
                quantity = {item.quantity}
                category = {item.category}
                />
            ))}
        </ul>
    );
}