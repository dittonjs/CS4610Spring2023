import { Outlet, useLocation, useMatch } from "react-router-dom"

export const Root = () => {
  const location = useLocation()
  let name = "Home";
  if (location.pathname === '/') {
    name = "Profile"
  } else {
    name = "Users"
  }

  return (
    <>
      <nav className="navbar">{name}</nav>
      <Outlet />
    </>
  )
}