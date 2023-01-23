import { useEffect, useState } from "react"

export const ToastsPage = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  useEffect(() => {
    if (isDisplayed) {
      const timeout = setTimeout(() => {
        console.log("I get called!");
        setIsDisplayed(false);
      }, 5000);
      return () => {
        console.log("I got unmounted");
        clearTimeout(timeout);
      }
    }
    return () => {};
  }, [isDisplayed]);

  return (
    <div>
      <button onClick={() => setIsDisplayed(true)}>Show toast</button>
      <div className={`toast ${isDisplayed ? 'open' : ''}`}>I am a toast!</div>
    </div>
  )
}