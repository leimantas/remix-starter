import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({ name: "Remix", age: 1 });
};

export default function AboutPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-2xl text-center my-4">About page</h1>

      <div>
        <div>Name: {data.name}</div>
        <div>Age: {data.age}</div>
      </div>

      <pre className="p-4 mt-4 bg-slate-100">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
