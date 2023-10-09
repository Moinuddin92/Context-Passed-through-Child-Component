import { createContext, useState } from "react";
import "./styles.css";
export const Cricket = createContext(null);

export default function App({ children }) {
  const [name] = useState("Gaura");
  return <Cricket.Provider value={{ name }}>{children}</Cricket.Provider>;
}
