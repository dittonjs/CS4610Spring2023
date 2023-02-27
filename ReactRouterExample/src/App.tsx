import { useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom"
import { ApiContext } from "./contexts/api"
import { Api } from "./lib/api"
import { Home } from "./pages/Home"
import { Root } from "./pages/Root"
import { User } from "./pages/User"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'users/:id',
        element: <User />,
      },
      {
        path: '/',
        element: <Home />
      }
    ]
  },
])

export const App = () => {

  const [api, setApi] = useState(new Api());

  // useEffect(() => {
  //   setApi(new Api());
  // }, []);


  return (
    <>
      <ApiContext.Provider value={api}>
        <RouterProvider router={router} />
      </ApiContext.Provider>
    </>
  )
}
