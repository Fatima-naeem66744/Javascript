import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { TaskContext } from "../context/taskcontext";

export default function TaskDetail() {
  const { id } = useParams();
  const { tasks } = useContext(TaskContext);

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return <h1>Task not found</h1>;
  }

  return (
    <div>
      <Link to="/tasks">← Back to Tasks</Link>

      <h1>{task.title}</h1>

      <p>Status: {task.status}</p>

      <p>{task.description}</p>
    </div>
  );
}

