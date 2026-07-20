export default function Button({ name }: {name: string}) {
    return (
        <button
            className="
                bg-blue-700 text-white px-4 py-2
                hover:bg-blue-400 rounded
                hover:outline-none hover:ring-2 hover:ring-blue-500
                text-xl
            "
        >
            {name}
        </button>
    )
}
