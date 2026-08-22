import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>
      <h2>Menu</h2>

      <nav>
        <Link to="/tasks">Tasks</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;