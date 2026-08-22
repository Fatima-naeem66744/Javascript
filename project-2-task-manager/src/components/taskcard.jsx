import { Link } from "react-router-dom";

function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h2>{task.title}</h2>

      <p className="task-status">
        Status: {task.status}
      </p>

      <p>{task.description}</p>

      <Link to={`/tasks/${task.id}`}>
        View Details
      </Link>
    </div>
  );
}

export default TaskCard;