import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

import UserButton from "../components/userButton";

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Fatima" },
  { id: 3, name: "Sara" },
  { id: 4, name: "Ahmed" },
  { id: 5, name: "Ayesha" },
];

function Home() {
  const navigate = useNavigate();

  // -------------------------
  // useRef
  // -------------------------

  const inputRef = useRef(null);

  // -------------------------
  // useState
  // -------------------------

  const [search, setSearch] = useState("");
  const [count, setCount] = useState(1); // Initialized to 1 for User 1
  const [selectedUser, setSelectedUser] = useState(null);

  // -------------------------
  // useRef + useEffect
  // Automatically focus input
  // -------------------------

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // -------------------------
  // useMemo
  // Filter users
  // -------------------------

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");

    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // -------------------------
  // useCallback
  // Dynamic user lookup & navigation based on count
  // -------------------------

  const handleSelect = useCallback(
    (currentCount) => {

        const targetUser = users.find((u) => u.id === currentCount);

      if (targetUser) {
        setSelectedUser(targetUser);
        navigate(`/users/${targetUser.id}`);
      } else {
        
        navigate(`/users/${currentCount}`);
      }
    },
    [navigate]
  );

  return (
    <div className="page">
      <h1>Home</h1>

      <p>
        This page demonstrates useRef, useMemo and useCallback.
      </p>

      {/* useRef + useEffect */}

      <section>
        <h2>useRef Example</h2>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <p>
          The input automatically receives focus when the page loads.
        </p>
      </section>

      {/* useMemo */}

      <section>
        <h2>useMemo Example</h2>

        <p>Search results:</p>

        {filteredUsers.length > 0 ? (
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </section>

      {/* useCallback */}

      <section>
        <h2>useCallback Example</h2>

        <p>Count: {count}</p>

        <button onClick={() => setCount((prev) => prev + 1)}>
          Increase Count
        </button>

        {/* Single button reacting to the counter state */}
        <UserButton count={count} onSelect={handleSelect} />

        {selectedUser && (
          <p style={{ marginTop: "10px" }}>
            Selected: <strong>{selectedUser.name}</strong>
          </p>
        )}
      </section>
    </div>
  );
}

export default Home;