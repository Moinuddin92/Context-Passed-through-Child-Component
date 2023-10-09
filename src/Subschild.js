import { useContext } from "react";
import { Cricket } from "./App";

export default function SUbschild({ children }) {
  const { name } = useContext(Cricket);
  return (
    <>
      <h1>Hello {name}</h1>
      {children}
    </>
  );
}
