import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-full shrink-0 border-r border-slate-200 bg-white px-4 py-5 md:w-64 md:py-7">
      <h2 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Menu
      </h2>

      <nav className="flex flex-row gap-1 md:flex-col">
        <Link
          to="/tasks"
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 no-underline transition hover:bg-violet-50 hover:text-violet-700"
        >
          Tasks
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;