import { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth";
import { useApi } from "../hooks/useApi";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const api = useApi();
  const setToken = useContext(AuthContext);

  async function signUp() {
    const body = {
      firstName,
      lastName,
      email,
      password
    }

    const resultBody = await api.post(`${import.meta.env.VITE_SERVER_URL}/users`, body)

    if (resultBody.token) {
      setToken(resultBody.token)
    }
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