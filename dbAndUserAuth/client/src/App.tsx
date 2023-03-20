import { useState } from "react";

export const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signUp() {
    const body = {
      firstName,
      lastName,
      email,
      password
    }
    const result = await fetch(`/users`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(body)
    });
  }

  return (
    <form className="signup-form">
      <label>
        First Name
        <input value={firstName} onChange={e => setFirstName(e.target.value)} type="text" />
      </label>
      <label>
        Last Name
        <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" />
      </label>
      <label>
        Email
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
      </label>
      <label>
        Password
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
      </label>
      <button type="button" onClick={signUp}>Sign up</button>
    </form>
  )
}