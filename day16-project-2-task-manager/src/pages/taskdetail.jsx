import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { TaskContext } from "../context/taskcontext";

export default function TaskDetail() {
  const { id } = useParams();

  const { tasks, updateTask } = useContext(TaskContext);

  const task = tasks.find(
    (task) => String(task.id) === String(id)
  );

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [status, setStatus] = useState(null);
  const [formError, setFormError] = useState("");

  if (!task) {
    return (
      <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
        <h1 className="text-2xl font-bold text-red-600">
          Task not found
        </h1>

        <Link
          to="/tasks"
          className="mt-4 inline-block font-medium text-purple-600 hover:underline"
        >
          ← Back to Tasks
        </Link>
      </div>
    );
  }

  const currentTitle = title ?? task.title;
  const currentDescription = description ?? task.description;
  const currentStatus = status ?? task.status;

  async function handleUpdate(event) {
    event.preventDefault();

    if (!currentTitle.trim()) {
      setFormError("Task title is required.");
      return;
    }

    setFormError("");

    await updateTask(id, {
      title: currentTitle.trim(),
      description: currentDescription.trim(),
      status: currentStatus,
    });
  }

  return (
    <div className="max-w-[600px]">
      <Link
        to="/tasks"
        className="text-sm font-medium text-[#8059ae] no-underline hover:underline"
      >
        ← Back to Tasks
      </Link>

      <h1 className="mb-6 mt-5 text-2xl font-bold tracking-tight text-slate-800">
        Edit Task
      </h1>

      <form
        onSubmit={handleUpdate}
        className="space-y-5 rounded-2xl border border-purple-100 bg-white p-7 shadow-md"
      >
        {formError && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            ⚠️ {formError}
          </div>
        )}

        {/* TITLE */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Title
          </label>

          <input
            type="text"
            value={currentTitle}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Description
          </label>

          <textarea
            value={currentDescription}
            onChange={(event) => setDescription(event.target.value)}
            className="min-h-28 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        {/* STATUS */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Status
          </label>

          <select
            value={currentStatus}
            onChange={(event) => setStatus(event.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* UPDATE BUTTON */}
        <button
          type="submit"
          className="w-full rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-violet-700 hover:shadow-md"
        >
          ✏️ Update Task
        </button>
      </form>
    </div>
  );
}