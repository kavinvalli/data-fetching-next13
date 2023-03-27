const getName = async (): Promise<string> => {
  const data = await fetch("http://localhost:3000/api/hello", {
    cache: "no-store",
  });
  const { name } = await data.json();

  return name;
};

export default async function Comp() {
  const name = await getName();

  return <p>Hello {name}!</p>;
}
