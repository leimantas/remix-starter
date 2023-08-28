import { json } from "@remix-run/node";

export const loader = async () => {
  console.log("server logs only");
  return json({ name: "Remix", age: 1 });
};
