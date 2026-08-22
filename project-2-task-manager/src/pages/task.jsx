import { useContext } from "react";
import { TaskContext } from "../context/taskcontext";
import TaskList from "../components/tasklist";

export default function Tasks() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h1>Task Manager</h1>

      <TaskList tasks={tasks} />
    </div>
  );
}