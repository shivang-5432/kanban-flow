import type { Task } from "../types/Task";

export default function TaskCard({ title, description }: Task) {
    return (
        <div className="rounded-xl bg-white p-4 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">
                {title}
            </h3>

            <p className="mt-2 text-sm text-gray-600">
                {description}
            </p>
        </div>
    )
}
