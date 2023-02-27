import { useEffect, useState } from 'react'
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { Profile } from './pages/Profile';

function Router() {
  const [page, setPage] = useState(window.location.hash.replace('#', ''));


  // this synchronizes the application state with the browser location state
  useEffect(() => {
    window.location.hash = page
  }, [page])

  // this synchronizes the browser location state with our application state
  useEffect(() => {
    const hashChange = () => {
      setPage(window.location.hash.replace('#', ''));
    }
    window.addEventListener("hashchange", hashChange);

    return () => {
      window.removeEventListener("hashchange", hashChange);
    }
  }, [])

  // dynamically select which page to render based on application state
  let component = <div>Not found</div>
  if (page === "home") component = <Home />
  else if (page === "dashboard") component = <Dashboard />
  else if (page === "profile") component = <Profile />

  return (
    <div>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
        <button onClick={() => setPage("profile")}>Profile</button>
      </nav>
      {component}
    </div>
  );
}

export default Router;
