import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Tasks from "./pages/task";
import TaskDetail from "./pages/taskdetail";
import Layout from "./components/layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/tasks" />}
          />

          <Route
            path="/tasks"
            element={<Tasks />}
          />

          <Route
            path="/tasks/:id"
            element={<TaskDetail />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}