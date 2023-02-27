import { useEffect, useState } from "react";

export const useRouter = () => {
  const [page, setPage] = useState(window.location.hash.replace('#', ''));

  useEffect(() => {
    window.location.hash = page
  }, [page])

  useEffect(() => {
    const hashChange = () => {
      setPage(window.location.hash.replace('#', ''));
    }
    window.addEventListener("hashchange", hashChange);

    return () => {
      window.removeEventListener("hashchange", hashChange);
    }
  }, [])

  return { page, setPage };
}

