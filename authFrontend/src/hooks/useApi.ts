import { useContext } from "react";
import { ApiContext } from "../contexts/api";

export const useApi = () => {
  const api = useContext(ApiContext);
  return api;
}