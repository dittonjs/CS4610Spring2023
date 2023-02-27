import { createContext } from "react";
import { Api } from "../lib/api";


export const ApiContext = createContext<Api>(new Api());
