export default function Navbar() {
    return (
        <nav className="grid h-16 grid-cols-3 bg-gray-900 text-white rounded-t-lg">
            <div className="flex items-center justify-center border-r border-gray-600">
                To Do
            </div>
            <div className="flex items-center justify-center border-r border-gray-600">
                In Progress
            </div>
            <div className="flex items-center justify-center">
                Done
            </div>
        </nav>
    )
}
