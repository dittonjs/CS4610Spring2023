import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'
import { ApiContext } from './contexts/api'
import { Api } from './lib/api'
import { AuthContext } from './contexts/auth'
import { useAuth } from './hooks/useAuth'

const router = createBrowserRouter([{
  path: "/",
  element: <Home />
}, {
  path: "/signup",
  element: <SignUp />
}, {
  path: "/dashboard",
  element: <Dashboard />
}])



function App() {
  const {token, setToken} = useAuth();

  return (
    <AuthContext.Provider value={setToken}>
      <ApiContext.Provider value={new Api(token)}>
        <RouterProvider router={router} />
      </ApiContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
