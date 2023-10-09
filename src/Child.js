import { useContext } from "react";
import { Cricket } from "./App";

export default function Child({ children }) {
  const { name } = useContext(Cricket);
  return (
    <>
      <h1>Hello My Name is {name}</h1>
      {children}
    </>
  );
}
