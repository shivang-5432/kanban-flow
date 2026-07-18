import TaskCard from "./TaskCard";

export default function Board() {
    return (
        <div className="grid flex-1 grid-cols-3">
            <div className="border border-gray-900 rounded-bl-lg">
                <TaskCard
                    title="Create ToDo List"
                    description="Create ToDo List App using React with TailwindCSS"
                 />
            </div>
            <div className="border border-gray-900"></div>
            <div className="border border-gray-900 rounded-br-lg"></div>
        </div>
    )
}
