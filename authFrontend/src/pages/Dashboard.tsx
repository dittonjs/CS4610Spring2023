import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Dashboard  = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/", {
        replace: true
      })
    }
  }, [])
  return <h1>I am on the dashboard</h1>
}