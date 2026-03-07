export default function Item({name, quantity, category}) {
    return (
        <li className="bg-white p-2 m-2 border rounded">
            <p className="text-blue-800 font-medium">{name}</p>
            <p className="text-sm text-blue-800">Quantity: {quantity}</p>
            <p className="text-sm text-blue-800 capitalize">Category: {category}</p>
        </li>
    );
}