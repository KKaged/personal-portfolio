"use client";
export default function Main({ children }) {
  return (
    <>
      <main className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-green-500">
        {children}
      </main>
    </>
  );
}
