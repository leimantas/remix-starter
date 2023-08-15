import { Outlet } from "@remix-run/react";

export default function PublicLayout() {
  return (
    <>
      <header className="bg-red-50">Header</header>
      <main className="flex-1 bg-indigo-100">
        <Outlet />
      </main>
      <footer className="bg-gray-100">Footer</footer>
    </>
  );
}
