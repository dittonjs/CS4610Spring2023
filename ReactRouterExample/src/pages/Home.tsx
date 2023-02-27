import { Link } from "react-router-dom"

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

export const Home = () => {
  return  (
    <div>
      {users.map(user => (
        <div key={user.id} >
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  )
}