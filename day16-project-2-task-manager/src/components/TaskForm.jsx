import { useContext, useState } from "react";
import { TaskContext } from "../context/taskcontext";

export default function TaskForm() {
  const { addTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Todo");
  const [formError, setFormError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim()) {
      setFormError("Task title is required.");
      return;
    }

    setFormError("");

    addTask({
      title: title.trim(),
      description: description.trim(),
      status,
    });

    setTitle("");
    setDescription("");
    setStatus("Todo");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 rounded-2xl border border-violet-100 bg-white p-7 shadow-md"
    >
      <h2 className="mb-6 text-2xl font-bold text-violet-700">
        Add New Task
      </h2>

      {formError && (
        <div className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          ⚠️ {formError}
        </div>
      )}

      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Task Title
          </label>

          <input
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Description
          </label>

          <textarea
            placeholder="Enter task description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="min-h-28 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Status
          </label>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-violet-700 hover:shadow-md"
        >
          + Add Task
        </button>
      </div>
    </form>
  );
}
