import { createContext } from "react";
import { Api } from "../lib/api";


export const AuthContext = createContext<(token: string) => void>((token) => {});
