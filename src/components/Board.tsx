import type { Task } from "../types/Task";
import TaskCard from "./TaskCard";

export default function Board() {

    const toDoTasks: Task[] = [{title: "toDo1", description: "desc1"}, {title: "toDo2", description: "desc2"}];
    const inProgressTasks: Task[] = [];
    const doneTasks: Task[] = [{title: "done1", description: "desc1"}];

    return (
        <div className="grid flex-1 grid-cols-3">
            <div className="border border-gray-900 rounded-bl-lg flex flex-col gap-4 p-4">
                {toDoTasks.map((task) => (
                    <TaskCard
                        key={task.title}
                        title={task.title}
                        description={task.description}
                    />
                ))}
            </div>
            <div className="border border-gray-900 flex flex-col gap-4 p-4">
                {inProgressTasks.map((task) => (
                    <TaskCard
                        key={task.title}
                        title={task.title}
                        description={task.description}
                    />
                ))}
            </div>
            <div className="border border-gray-900 rounded-br-lg flex flex-col gap-4 p-4">
                {doneTasks.map((task) => (
                    <TaskCard
                        key={task.title}
                        title={task.title}
                        description={task.description}
                    />    
                ))}
            </div>
        </div>
    )
}
