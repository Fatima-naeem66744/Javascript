import { useContext } from "react";
import { TaskContext } from "../context/taskcontext";
import TaskList from "../components/tasklist";
import TaskForm from "../components/TaskForm";

export default function Tasks() {
  const { tasks, loading, error } = useContext(TaskContext);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">
          Tasks
        </h1>
        <p className="text-sm text-slate-500">
          Create, track, and manage your work in one place.
        </p>
      </div>

      <TaskForm />

      {loading && (
        <p className="text-sm text-slate-500">Loading tasks...</p>
      )}

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      {!loading && !error && tasks.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center">
          <p className="text-slate-500">
            No tasks yet. Create your first task!
          </p>
        </div>
      )}

      {!loading && !error && tasks.length > 0 && (
        <TaskList tasks={tasks} />
      )}
    </div>
  );
}