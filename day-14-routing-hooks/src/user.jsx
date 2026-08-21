import { useParams } from "react-router-dom";

function User() {

  const { id } = useParams();

  return (
    <div>
      <h1>User Details</h1>

      <p>User ID: {id}</p>
    </div>
  );
}

export default User;