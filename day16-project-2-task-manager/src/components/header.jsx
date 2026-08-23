import { useContext } from "react";
import { TaskContext } from "../context/taskcontext";

function Header() {
  const { tasks } = useContext(TaskContext);

  return (
    <header className="sticky top-0 z-20 flex h-[70px] items-center justify-between border-b border-slate-200 bg-white/80 px-5 backdrop-blur-md md:px-8">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-sm font-bold text-white shadow-sm">
          TM
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-800">
          Task Manager
        </h1>
      </div>

      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
        {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
      </span>
    </header>
  );
}

export default Header;