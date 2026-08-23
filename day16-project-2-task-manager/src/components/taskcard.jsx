import { Link } from "react-router-dom";
import { useContext } from "react";
import { TaskContext } from "../context/taskcontext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  const statusStyles = {
    Todo: "bg-slate-100 text-slate-600",
    "In Progress": "bg-amber-100 text-amber-700",
    Completed: "bg-emerald-100 text-emerald-700",
  };

  const statusClass =
    statusStyles[task.status] || "bg-slate-100 text-slate-600";

  function handleDelete() {
    deleteTask(task.id);
  }

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-800">
          {task.title}
        </h2>

        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${statusClass}`}
        >
          {task.status}
        </span>
      </div>

      <p className="text-sm leading-relaxed text-slate-500">
        {task.description}
      </p>

      <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
        <Link
          to={`/tasks/${task.id}`}
          className="inline-flex items-center gap-1 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
        >
          View Details
          <span aria-hidden="true">→</span>
        </Link>

        <button
          type="button"
          onClick={handleDelete}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;