import { useContext } from "react";
import { TaskContext } from "../context/taskcontext";

function Header() {
  const { tasks } = useContext(TaskContext);

  return (
    <header>
      <h1>Task Manager</h1>
      <p>Total Tasks: {tasks.length}</p>
    </header>
  );
}

export default Header;