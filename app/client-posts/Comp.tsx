"use client";

import { use } from "react";

const getName = async (): Promise<string> => {
  const data = await fetch("http://localhost:3000/api/hello");
  const { name } = await data.json();

  return name;
};

export default function Comp() {
  const name = use(getName());

  return <p>Hello {name}!</p>;
}
