import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [filteredUsers, setFilteredUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // --------------------------------
  // FETCH USERS
  // --------------------------------

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch(() => {
        setError("Something went wrong while fetching users.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // --------------------------------
  // SEARCH USERS
  // --------------------------------

  useEffect(() => {
    const timer = setTimeout(() => {
      const results = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredUsers(results);
    }, 300);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, [search, users]);

  // --------------------------------
  // UI
  // --------------------------------

  return (
    <div>
      <h1>Searchable Users</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <p>Loading users...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <div>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;