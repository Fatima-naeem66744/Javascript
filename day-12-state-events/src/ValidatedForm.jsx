import { useState } from "react";

function ValidatedForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValid = email.includes("@");
  const passwordValid = password.length >= 8;

  return (
    <div>
      <h1>Validated Form(second task)</h1>

      <label style={{color : "black"}}> Email: </label>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      {email && !emailValid && (
        <p style={{color : "red"}}>Please enter a valid email.</p>
      )}

      <br />      <br />


      <label>Password: </label>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      {password && !passwordValid && (
        <p style={{color : "red"}}>Password must be at least 8 characters.</p>
      )}

      <br />       <br />


      <button>
        Submit
      </button>
    </div>
  );
}

export default ValidatedForm;