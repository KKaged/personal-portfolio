"use client";

import React from "react";

export default function Nav({ children }) {
  return (
    <nav className="flex justify-between px-64 py-7">
      <logo className="flex items-center justify-center text-2xl font-bold animate-pulse">
        Daniel Leon
      </logo>
      <ul className="flex justify-between gap-2">{children}</ul>
    </nav>
  );
}
