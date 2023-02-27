import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ApiContext } from "../contexts/api";
import { useApi } from "../hooks/useApi";

const users = [{
  id: 1,
  name: "Joseph"
},{
  id: 2,
  name: "Catelyn"
},{
  id: 3,
  name: "Sophie"
}];

export const User = () => {
  const navigate = useNavigate();
  const api  = useApi();

  useEffect(() => {
    console.log(api);
  }, []);
  const {id} = useParams();
  const user = users.find((user) => user.id === parseInt(id!!, 10));

  if (!user) {
    return <div>User with id {id} not found</div>
  }

  return (
    <>
      <h1>{user.name}</h1>
      <button onClick={() => navigate('users/3', {replace: true})}>Go Somewhere</button>
    </>
  )
}