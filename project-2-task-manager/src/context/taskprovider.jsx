import { useState } from "react";
import { TaskContext } from "./taskcontext";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      status: "In Progress",
      description: "Learn Context API and React concepts.",
    },
    {
      id: 2,
      title: "Build Task Manager",
      status: "Todo",
      description: "Create a task manager using React.",
    },
    {
      id: 3,
      title: "Practice Routing",
      status: "Completed",
      description: "Practice React Router and dynamic routes.",
    },
  ]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}