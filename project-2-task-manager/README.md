# JAM RECORDING
[Day 15 – Context API — Project 2 Kickoff – Proof of Completion]()

# Project 2 — Task Manager Scaffold + Global State

Built a React Task Manager scaffold using Context API for global task state. The project includes a `TaskContext` and `TaskProvider` that provide task data and state updates at a high level, with multiple components consuming the context directly through `useContext` to avoid prop drilling. The app is organized by responsibility into `components/`, `context/`, and `pages/`, and includes reusable layout components such as Header, Sidebar, MainContent, TaskList, and TaskCard. Mock tasks are displayed with their titles, statuses, and descriptions, while React Router provides a `/tasks` list page and a dynamic `/tasks/:id` detail page. This project demonstrates global state management, component composition, routing, Context API, and a scalable React project structure.