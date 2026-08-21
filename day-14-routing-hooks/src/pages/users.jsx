import { useParams } from "react-router-dom";

import useFetch from "../hooks/usefetch";

function User() {
  const { id } = useParams();

  const {
    data,
    loading,
    error,
  } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (loading) {
    return (
      <div className="page">
        <h1>Loading...</h1>
        <p>Fetching user {id}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>User Details</h1>

      <div className="user-card">
        <h2>{data.name}</h2>

        <p>
          <strong>User ID:</strong> {data.id}
        </p>

        <p>
          <strong>Username:</strong> {data.username}
        </p>

        <p>
          <strong>Email:</strong> {data.email}
        </p>

        <p>
          <strong>Phone:</strong> {data.phone}
        </p>

        <p>
          <strong>City:</strong> {data.address.city}
        </p>
      </div>
    </div>
  );
}

export default User;