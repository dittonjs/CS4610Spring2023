import { useState } from 'react'
import { ToastsPage } from './ToastsPage'
import { OtherPage } from './OtherPage'
export const App = () => {
  const [pageName, setPageName] = useState("toasts");
  console.log(pageName);
  return (
    <div>
      <button onClick={() => setPageName("toasts")}>Toasts</button>
      <button onClick={() => setPageName("other")}>Other</button>
      <div>
        {pageName === "toasts" && <ToastsPage />}
        {pageName === "other" && <OtherPage />}
      </div>
    </div>
  )
}

