import { useEffect, useState } from "react";
import { TaskContext } from "./taskcontext";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // READ
  useEffect(() => {
    async function fetchTasks() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("http://localhost:3000/tasks");

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();

        setTasks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  // CREATE
  async function addTask(newTask) {
    try {
      setError("");

      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      const createdTask = await response.json();

      setTasks((currentTasks) => [...currentTasks, createdTask]);
    } catch (error) {
      setError(error.message);
    }
  }

  // UPDATE
  async function updateTask(id, updatedTask) {
    try {
      setError("");

      const response = await fetch(
        `http://localhost:3000/tasks/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedTask),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      const updatedTaskFromServer = await response.json();

      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          String(task.id) === String(updatedTaskFromServer.id)
            ? updatedTaskFromServer
            : task
        )
      );
    } catch (error) {
      setError(error.message);
    }
  }

  // DELETE
  async function deleteTask(id) {
    try {
      setError("");

      const response = await fetch(
        `http://localhost:3000/tasks/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      setTasks((currentTasks) =>
        currentTasks.filter(
          (task) => String(task.id) !== String(id)
        )
      );
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <TaskContext.Provider
      value={{
      tasks,
      loading,
      error,
      addTask,
      updateTask,
      deleteTask,
}}
    >
      {children}
    </TaskContext.Provider>
  );
}